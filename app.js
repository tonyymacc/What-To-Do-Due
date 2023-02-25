// Array to hold the to-do list tasks
let tasks = [];

// Function to add a task to the list
function addTask() {
  // Get the task input element and its value
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value;

  // Add the task to the array and clear the input field
  tasks.push(taskValue);
  taskInput.value = "";

  // Update the task list
  updateTaskList();
}

// Function to update the task list
function updateTaskList() {
  // Get the task list element
  const taskList = document.getElementById("taskList");

  // Clear the task list
  taskList.innerHTML = "";

  // Loop through the tasks array and add each task to the list as a list item
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const listItem = document.createElement("li");
    listItem.textContent = task;
    taskList.appendChild(listItem);
  }
}