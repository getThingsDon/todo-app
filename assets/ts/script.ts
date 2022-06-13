// ALL TYPES
interface loopValues {
    id: string,
    title: string,
    completed: boolean
}

// SELECTIONS
const todo_body: any = document.getElementById("todo_body");
const submit_btn: any = document.getElementById("submit_btn");
const add_field: any = document.getElementById("add_field");

// VARIABLES
var todo_data = [];
var inputVal = "";

// ONCHANGE EVENT
const inpHandle = (value: string) => inputVal = value;


// TO LOOP THE DATA OF TODOS
function loopingTheData (values: loopValues[]) {
    let dataToAppend = "";

    if (values.length) {
for (let i = 0; i < values.length; i++) {
    dataToAppend+= `
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center bg-light shadow border-1 border-gray py-2">
            <div class="d-flex align-items-center ms-2">
                <input ${todo_data[i].completed === true && "checked" || false} type="checkbox" name="">
                <h4 class="mb-0 ps-4">${todo_data[i].title}</h4>
            </div>
            <div class="d-flex">
                <button onclick="deleteTodo(${todo_data[i].id})" class="btn btn-danger">Delete</button>
            </div>
                </div>
            </div>`
}

    } else {
dataToAppend+= `<div class="col-12 text-center">No data</div>`
    }
    todo_body.innerHTML = dataToAppend;
}

// DELETE FUNCTION TO DELETE TODO
function deleteTodo (id: string) {
    const dataToSend = [];

    for (let i = 0; i < todo_data.length; i++) {
if (todo_data[i].id !== id) {
    dataToSend.push(todo_data[i]);
}
    }

    todo_data = dataToSend;
    loopingTheData(dataToSend)
}

// SUBMIT FUNCTION TO SUBMIT TODO
submit_btn.addEventListener("click", () => {
    if (inputVal) {
let Id =  Date.now()
    
const addingVal = {
    id: Id,
    title: inputVal,
    completed: false
}
    
todo_data.push(addingVal)
loopingTheData(todo_data)
add_field.value = ""
    } else {
alert("Enter Text")
    }
}) 

window.onload = () => loopingTheData(todo_data);
