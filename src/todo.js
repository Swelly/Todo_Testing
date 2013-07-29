var todoApp = {}
var todoItem = {}

// Object duplicating (creating / cloning)
function duplicate(todoItem) {
  var duplicate = function() {};
  duplicate.prototype = todoItem;
  return new duplicate();
}
// Create tasks under the duplicate (clone) function
todoApp.newTodo = function(task) {
  var todo = duplicate(todoItem);
  todo.task = task;
  return task;
}

// DOM MANIPULATION - Monkey Bars
var addThisTask = function () {
  // add task from input by applying todoApp.newTodo function
  var taskInput = document.getElementById('new-task-field').value;
  var theNewTask = todoApp.newTodo(taskInput);
  var todoList = document.getElementById('todo-items');
  var todoItems = document.getElementById('new-todo');
  // append li (child) text to ul parent.
  todoItems.innerText = newTodo.task;
  todoList.appendChild(todoItems);
}


window.onload = function () {
  //click event to pass input into a new todo object
  var addTaskButton = document.getElementById('add-item');
  addTaskButton.onclick = function (event) {
    new
  }
}
