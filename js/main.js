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
function init () { 

    console.log("initierar.."); //console.log för att testköra att allt fungerar

      //inaktivera lägg till-knapp 
      newTodoButtonEl.disabled = true; 

 

    //läser in todo-lista 
    loadTodoList() 

} 

//Konrollera input 
function checkInput() { 

    console.log("kontrollerar input.."); 

    let input = newTodoEl.value; 

 

//kontrollera om inmatad text har korrekt antal tecken 

if (input.length > 4 ) { 

    //inget meddelande om korrekt input 
    messgeEl.innerHTML = ""; 

    newTodoButtonEl.disabled = false; 

} else { 

    //meddelande med text vid för få tecken 
    messgeEl.innerHTML = "Måste innehålla minst fem tecken."; 

    newTodoButtonEl.disabled = true; 

} 
    
} 


//Lägg till i todo-list
function newTodo() { 

    console.log("lägger till todo.."); 

    //anropar lagring 
    saveTodoList(); 

}


//Spara todo-list
function saveTodoList() { 

    console.log("lagrar todo-list.."); 

} 



//Läs in todo-list
function loadTodoList() { 

    console.log("läser in todo-lista.."); 

} 


//Rensa todo-list
function clearButton () { 

    console.log("rensa todo-listan.."); 

} 