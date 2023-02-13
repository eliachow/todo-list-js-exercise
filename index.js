// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

//new feature: allow ea task to have a description, modify newTask function

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskTitles.push(description)
//   taskComplete.push(false);
// }

//refactor: replacing multiple arrays in favor of the state:
// function newTask(title, description) {
//   const task = {
//     title: title,
//     description: description,
//     complete: false,
//   };
//   return task;
// }

//refactor to be object orientated, moving functions into object to become methods
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// //refactored completeTask()
// function completeTask(task) {
//   task.complete = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// //refactored logTaskState()
// //prints out the provided tasks's details
// function logTaskState(task) {
//   console.group(
//     //if task.complete = true return a space, else return not
//     `${task.title} has${task.complete ? " " : " not "}been completed`
//   );
// }

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
); // task 0
const task2 = newTask("Do Laundry", "🧺"); // task 1
const tasks = [task1, task2];

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

task1.logState();
task1.markCompleted();
task1.logState();

console.log("tasks: ", tasks);
