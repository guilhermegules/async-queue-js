# Async Queue

A simple asynchronous queue is a data structure that manages a collection of tasks to be executed asynchronously in a sequential order. Here's a description of a basic implementation:

- Task Representation: Each task in the queue is represented by a function that performs some asynchronous operation. These functions typically return a promise.
- Queue Management: The queue maintains an internal array to store the tasks in the order they are added. It also keeps track of the current state of execution (e.g., whether it's currently processing a task or not).
- Execution Logic: When a task is added to the queue, it's appended to the end of the array if the queue is not currently processing any task. If the queue is already executing tasks, the new task is enqueued to be executed later.
- Task Execution: When the queue starts processing tasks, it dequeues the tasks one by one in the order they were added and executes them asynchronously. After a task completes, it moves to the next task in the queue until all tasks are processed.
- Concurrency Control (Optional): Depending on requirements, the queue might implement concurrency control, such as limiting the maximum number of tasks executed simultaneously.

## Code

- Running the code you only need node.js
- Then run `node index.js` inside `src` folder
