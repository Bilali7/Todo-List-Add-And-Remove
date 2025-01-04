let tasks = [];

let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

document.getElementById("addStartBtn").addEventListener("click", () => {
    let task = taskInput.value.trim();
    if (task) {
        tasks.unshift(task);
        taskInput.value = "";
        renderTasks();
    }
});

document.getElementById("addEndBtn").addEventListener("click", () => {
    let task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    }
});

document.getElementById("removeStartBtn").addEventListener("click", () => {
    tasks.shift();
    renderTasks();
});

document.getElementById("removeEndBtn").addEventListener("click", () => {
    tasks.pop();
    renderTasks();
});