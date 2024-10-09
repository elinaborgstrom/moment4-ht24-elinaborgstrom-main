"use strict";

//Variabler  

let newTodoEl = document.getElementById("newtodo"); 
let newTodoButtonEl = document.getElementById("newtodobutton"); 
let messgeEl = document.getElementById("message"); 
let todoListEl = document.getElementById("todolist"); 
let clearButtonEl = document.getElementById("clearbutton"); 


//Händelsehanterare 

newTodoEl.addEventListener("keyup", checkInput); 
newTodoButtonEl.addEventListener("click", newTodo); 
clearButtonEl.addEventListener("click", clearButton);
window.onload = init; 


//Startfunktion 




//Konrollera input 




//Lägg till till todo-list




//Spara todo-list




//Läs in todo-list




//Rensa todo-list