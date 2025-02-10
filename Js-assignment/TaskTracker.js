const tasks = [
  { taskName: "Write report", completed: true, priority: 2 },
  { taskName: "Attend meeting", completed: false, priority: 3 },
  { taskName: "Fix bug", completed: false, priority: 1 },
  { taskName: "Update website", completed: true, priority: 4 },
];
// find: Identify the first task with a high priority (for example, priority less than 3).
// findIndex: Find the index of the first task that is not completed.
// reduce: Count how many tasks have been completed.
// (forEach): Print all task names.
const findtask = tasks.find((task) => task.priority > 3);
console.log(findtask);
const findIndextask = tasks.findIndex((task) => !task.completed);
console.log(findIndextask);
const completedCount = tasks.reduce((acc, task) => {
  if (task.completed) {
    acc += 1;
  }
  return acc;
}, 0);

console.log(completedCount);
tasks.forEach((task) => {
  console.log(task.taskName);
});
