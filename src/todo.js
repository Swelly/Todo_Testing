var todoApp = {
  // Create tasks under the duplicate (clone) function
  newTodo: function(task) {
    var todo = duplicate(todoItem);
    todo.task = task;
    return task;
  }
  // DOM MANIPULATION - Monkey Bars
  addThisTask: function (task) {
    // add task from input by applying todoApp.newTodo function
    var taskInput = document.getElementById('new-task-field').value;
    var theNewTask = todoApp.newTodo(taskInput);
    var todoList = document.getElementById('todo-items');
    var todoItems = document.getElementById('new-todo');
    // append li (child) text to ul parent.
    todoItems.innerText = addThisTask.task;
    todoList.appendChild(todoItems);
  }
};
var todoItem = {}

window.onload = function () {
  //click event to pass input into a new todo object
  var addTaskButton = document.getElementById('add-item');
  addTaskButton.onclick = function (event) {
    addThisTask();
  }
}

// Object duplicating (creating / cloning)
// GAWD FUNCTION
function duplicate(todoItem) {
  var duplicate = function() {};
  duplicate.prototype = todoItem;
  return new duplicate();
}
