import AsyncQueue from "./AsyncQueue.js";

const queue = new AsyncQueue();

const test = async (item) => {
  return new Promise((resolve) => {
    resolve(item);
  });
};

queue.enqueue((item) => test(item));

queue.enqueue((item) => test(item));

queue.enqueue(() =>
  Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1"),
    fetch("https://jsonplaceholder.typicode.com/todos/2"),
  ])
);

queue
  .dequeue()
  .then((e) => console.log("then 1", e))
  .catch((e) => console.error("error 1", e));

queue
  .dequeue()
  .then((e) => console.log("then 2", e))
  .catch((e) => console.error("error 2", e));

queue
  .dequeue()
  .then((e) => console.log("then 3", e))
  .catch((e) => console.error("error 3", e));

queue
  .dequeue()
  .then((e) => console.log("then 4", e))
  .catch((e) => console.error("error 4", e));
