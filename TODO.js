
document.getElementById("add-task-btn").addEventListener("click", function() {
  const taskInput = document.getElementById("task-input");
  const taskTime = document.getElementById("task-time");
  const pendingTasks = document.getElementById("pending-tasks");

  if (taskInput.value && taskTime.value) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <div class="task-content">
        <span>${taskInput.value}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
      </div>
      <div class="task-time">Due: ${new Date(taskTime.value).toLocaleString()}</div>
    `;
    pendingTasks.appendChild(taskItem);
    taskInput.value = "";
    taskTime.value = "";
  }
});

function completeTask(button) {
  const task = button.closest("li");
  const completedTasks = document.getElementById("completed-tasks");
  completedTasks.appendChild(task);
  task.classList.add("completed");
  button.remove();

  const taskLog = document.getElementById("task-log");
  const logItem = task.cloneNode(true); 
  logItem.querySelector("button").remove();
  taskLog.appendChild(logItem);
}

function deleteTask(button) {
  const task = button.closest("li");
  const binTasks = document.getElementById("task-bin");
  binTasks.appendChild(task);
  task.classList.add("deleted");
  button.remove();
}

document.getElementById("pending-tab-btn").addEventListener("click", function() {
  document.getElementById("pending-section").classList.remove("hidden");
  document.getElementById("completed-section").classList.add("hidden");

  document.getElementById("pending-tab-btn").classList.add("active");
  document.getElementById("completed-tab-btn").classList.remove("active");
});

document.getElementById("completed-tab-btn").addEventListener("click", function() {
  document.getElementById("pending-section").classList.add("hidden");
  document.getElementById("completed-section").classList.remove("hidden");

  document.getElementById("pending-tab-btn").classList.remove("active");
  document.getElementById("completed-tab-btn").classList.add("active");
});

document.getElementById("show-log-btn").addEventListener("click", function() {
  document.getElementById("task-log").classList.toggle("hidden");
});

document.getElementById("show-bin-btn").addEventListener("click", function() {
  document.getElementById("task-bin").classList.toggle("hidden");
});

document.getElementById("clear-bin-btn").addEventListener("click", function() {
  const binTasks = document.getElementById("task-bin");
});
