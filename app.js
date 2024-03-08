// Link HTML Tags in JavaScript START

const inputTodo = document.querySelector('#getTodo');
const addTodo = document.querySelector('#addTodo');
const clearAllTodo = document.querySelector('#clearAllTodo')
const todoUL = document.querySelector('#todoUL');

// Link HTML Tags in JavaScript END

// GLOBAL TODO ARRAY START

const todo = [];

// GLOBAL TODO ARRAY END

// FUNCTIONS START

// RENDER TODO

function renderTodoList(){
    todoUL.innerHTML = '';

    for (let i = 0; i < todo.length; i++){
    todoUL.innerHTML += `<li id="todoLI">${todo[i]} <button id="deleteTodo" onclick='deleteTodo(${i})'>
    Delete Todo</button> <button id="editTodo" onclick='editTodo(${i})'>Edit Todo</Button></li>`
    }
}

// ADD TODO

function addTodoList(){
    todo.push(inputTodo.value);
    inputTodo.value = '';
    renderTodoList();
}

// CLEAR ALL TODO

function clearTodo(index){
    li.innerHTML = '';
}

// DELETE TODO

function deleteTodo(index){
    todo.splice(index , 1);
    renderTodoList();
}

// EDIT TODO

function editTodo(index){

    const editedTodo = prompt("Enter to update Todo Task.");    

    todo.splice(index , 1 , editedTodo);
    renderTodoList();
}
// FUNCTIONS END