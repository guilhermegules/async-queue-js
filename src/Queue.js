export default class Queue {
  constructor() {
    this.items = [];
  }

  dequeue() {
    return this.items.shift();
  }

  enqueue(item) {
    this.items.push(item);
  }
}
