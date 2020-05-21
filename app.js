// We have to define UI vars

let form = document.querySelector("#task-form");    // For an ID, we use a hash(#)
let taskList = document.querySelector(".collection");   // For a class, we a dot(.)
let filter = document.querySelector("#filter");
let taskInput = document.querySelector("#task");


// load all event listener

loadEventlisteners();

// Load all event listeners
function loadEventlisteners(){
    // Add task event
    form.addEventListener("submit", addTask)
}

// Add task
function addTask(e) {
    if (taskInput.value === ''){
        alert("Add a task");
    }


    e.preventDefault()
}