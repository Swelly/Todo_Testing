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

var addThisTask = function () {
  var taskInput = document.getElementById('new-task-field').value;

}


window.onload = function () {
  //click event to pass input into a new todo object
  var addTaskButton = document.getElementById('add-item');
  addTaskButton.onclick = function (event) {
    new
  }
}
