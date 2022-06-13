// SELECTIONS
var todo_body = document.getElementById("todo_body");
var submit_btn = document.getElementById("submit_btn");
var add_field = document.getElementById("add_field");
// VARIABLES
var todo_data = [];
var inputVal = "";
// ONCHANGE EVENT
var inpHandle = function (value) { return inputVal = value; };
// TO LOOP THE DATA OF TODOS
function loopingTheData(values) {
    var dataToAppend = "";
    if (values.length) {
        for (var i = 0; i < values.length; i++) {
            dataToAppend += "\n            <div class=\"col-12\">\n                <div class=\"listelement d-flex justify-content-between align-items-center bg-light shadow border-1 border-gray py-2\">\n            <div class=\"d-flex align-items-center ms-2\">\n                <input ".concat(todo_data[i].completed === true && "checked" || false, " type=\"checkbox\" name=\"\">\n                <h4 class=\"mb-0 ps-4\">").concat(todo_data[i].title, "</h4>\n            </div>\n            <div class=\"d-flex\">\n                <button onclick=\"deleteTodo(").concat(todo_data[i].id, ")\" class=\"btn btn-danger\">Delete</button>\n            </div>\n                </div>\n            </div>");
        }
    }
    else {
        // show this: if there is nothing as a ToDo
        dataToAppend += "<div class=\"col-12 text-center emptymessage\">Welcome to Wunderlist! <br>The Only one and simple To-Do List you really need!</div>";
    }
    todo_body.innerHTML = dataToAppend;
}
// DELETE FUNCTION TO DELETE TODO
function deleteTodo(id) {
    var dataToSend = [];
    for (var i = 0; i < todo_data.length; i++) {
        if (todo_data[i].id !== id) {
            dataToSend.push(todo_data[i]);
        }
    }
    todo_data = dataToSend;
    loopingTheData(dataToSend);
}
// SUBMIT FUNCTION TO SUBMIT TODO
submit_btn.addEventListener("click", function () {
    if (inputVal) {
        var Id = Date.now();
        var addingVal = {
            id: Id,
            title: inputVal,
            completed: false
        };
        todo_data.push(addingVal);
        loopingTheData(todo_data);
        add_field.value = "";
    }
    else {
        alert("Enter Text");
    }
});
window.onload = function () { return loopingTheData(todo_data); };
