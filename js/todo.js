const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = (event.target.parentElement);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // 클릭 id 와 다른 toDo 는 남겨두고싶음
    li.remove();
    saveToDos();
}

function paintTodo(newTodo){
    const li = document.createElement("li"); 
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    //console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {    // 오브젝트 생성
        text:newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(saveToDos);

if(savedToDos !== null){
    //console.log("hi");
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 이전 목록 복원 
    parsedToDos.forEach(paintTodo);
}




