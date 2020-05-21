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

    // Create li element
    let li = document.creatElement("li");
    // Add a class
    li.className = "collection-item";
// Create text node and append to li
    li.appendchild(document.createTextNode(taskInput.value));
// Create new link element
let link = document.createElement("a");
link.className = "delete-item secondary-content";

// Add icon html 
link.innerHTML = '<i class="fa fa-remove"></i>';

//Append the link to li
li.appendchild(link);



    e.preventDefault()          // It prevent the submission to occur. 
}