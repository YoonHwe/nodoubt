// const toDoForm = document.getElementById("todo_form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo_list");

// let toDos = [];//update 가능하도록

// const TODOS_KEY = "todos";

// function deleteToDo(event){
//     const li = event.target.parentElement;
//     li.remove();
//     toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
//     saveToDos();
// }

// function saveToDos(){
//     localStorage.setItem("todos", JSON.stringify(toDos));
// }

// function paintToDo(newToDo){
//     const li = document.createElement("li");
//     li.id = newToDo.id
//     const span = document.createElement("span");
//     span.innerText = newToDo.text;
//     const button = document.createElement("button");
//     button.innerText = "❌";
//     button.addEventListener("click",deleteToDo);
//     li.appendChild(span);
//     li.appendChild(button);
//     toDoList.appendChild(li);
// }

// function handleToDoSubmit(event){
//     event.preventDefault();
//     const newToDo = toDoInput.value;
//     toDoInput.value = "";
//     const newToDoObj = {
//         text: newToDo,
//         id: Date.now(),
//     };
//     toDos.push(newToDoObj);
//     paintToDo(newToDoObj);
//     saveToDos();
// }


// toDoForm.addEventListener("submit",handleToDoSubmit);

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if(savedToDos){
//     const parsedToDos = JSON.parse(savedToDos);
//     toDos = parsedToDos;
//     parsedToDos.forEach(paintToDo);
// }