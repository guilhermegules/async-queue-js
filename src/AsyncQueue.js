import Queue from "./Queue.js";
import Completed from "./status/Completed.js";
import ErrorQueue from "./status/ErrorQueue.js";
import Pending from "./status/Pending.js";

export default class AsyncQueue extends Queue {
  constructor() {
    super();
    this.pending = false;
  }

  enqueue(action) {
    return new Promise((resolve, reject) => {
      super.enqueue({ action, resolve, reject });
    });
  }

  async dequeue() {
    if (this.pending) return new Pending();

    const item = super.dequeue();

    if (!item) return new Completed({ message: "no items" });

    try {
      this.pending = true;

      const payload = await item.action({ foo: "bar" });

      this.pending = false;

      item.resolve(payload);

      return new Completed({ message: "completed", item });
    } catch (e) {
      this.pending = false;
      item.reject(e);
      return new ErrorQueue();
    } finally {
      this.dequeue();
    }
  }
}
