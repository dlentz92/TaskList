// DEFINE UI VARIABLES

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// LOAD ALL EVENT LISTENERS

loadEventListeners();
function loadEventListeners() {
    // DOM LOAD EVENT
    document.addEventListener("DOMContentLoaded", getTasks)
    // ADD TASK EVENT
    form.addEventListener("submit", addTask)
    // REMOVE TASK EVENT
    taskList.addEventListener("click", removeTask)
    // CLEAR TASK EVENT
    clearBtn.addEventListener("click", clearTasks)
    // FILTER TASKS EVENT
    filter.addEventListener("keyup", filterTasks)
}

// GET TASKS FROM LS
function getTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localstorage.getItem("tasks"));
    }
    tasks.forEach(function (task) {
        // ADD CLASS
        li.className = "collection-item";
        // CREATE TEXT NODE AND APPENED TO LI
        li.appendChild(document.createTextNode(taskInput.value));
        // CREATE NEW LINK ELEMENT
        const link = document.createElement("a");
        // ADD CLASS
        link.className = "delete-item secondary-content";
        // ADD ICON HTML
        link.innerHTML = '<i class = "fa fa-remove"></i>'
        // APPEND THE LINK TO LI
        li.appendChild(link);
        // APPEND LI TO UL
        taskList.appendChild(li);
    })
}

// ADD TASK
function addTask(e) {
    if (taskInput.value === "") {
        alert("add a task")
    }

    // CREATE LI ELEMENT
    const li = document.createElement("li");
    // ADD CLASS
    li.className = "collection-item";
    // CREATE TEXT NODE AND APPENED TO LI
    li.appendChild(document.createTextNode(taskInput.value));
    // CREATE NEW LINK ELEMENT
    const link = document.createElement("a");
    // ADD CLASS
    link.className = "delete-item secondary-content";
    // ADD ICON HTML
    link.innerHTML = '<i class = "fa fa-remove"></i>'
    // APPEND THE LINK TO LI
    li.appendChild(link);

    // APPEND LI TO UL
    taskList.appendChild(li);

    // CLEAR INPUT
    taskInput.value = '';

    e.preventDefault();
}

// STORE TASK IN LOCAL STORAGE
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localstorage.getItem("tasks"));
    }
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks))
}

// REMOVE TASK
function removeTask(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// CLEAR TASKS
function clearTasks() {
    // taskList.innerHTML = "";
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
}

// FILTER TASKS
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach
        (function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = "block";
            } else {
                task.style.display = "none";
            }

        });
}