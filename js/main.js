"use strict";

//Variabler  

let newTodoEl = document.getElementById("newtodo"); 
let newTodoButtonEl = document.getElementById("newtodobutton"); 
let messgeEl = document.getElementById("message"); 
let todoListEl = document.getElementById("todolist"); 
let clearButtonEl = document.getElementById("clearbutton"); 
let i;


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
    loadTodo() 

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
    messgeEl.innerHTML = "Använd minst fem tecken."; 

    newTodoButtonEl.disabled = true; 

} 
    
} 


//Lägg till i todo-list
function newTodo() { 

    console.log("lägger till todo.."); 

    let input = newTodoEl.value; 

//skapar nytt article-element som placeras inom sektionen med id=todolist
let newTodoItem = document.createElement("article"); 
let newTextNode = document.createTextNode(input); 
newTodoItem.appendChild(newTextNode);


//lägger till i todo-listan 
    todoListEl.appendChild(newTodoItem); 


    //Lägger till klickhanterare med en "anonym funktion" med ett elemnt (e). Det element som klickats på raderas från listan.
    newTodoItem.addEventListener("click", function(e) {
    e.target.remove();

});


//raderar input-fält
    newTodoEl.value = "";
    newTodoButtonEl.disabled = true;

    //anropar lagring 
    saveTodo(); 

}


//Spara todo-list
function saveTodo() { 

//läser in todo-listan genom att hämta element med taggen article
//Lagrar todo-listan i variabeln todolist
let todos = document.getElementsByTagName("article");

//skapar en temporär array som kan fyllas på med todo-items
let tempArr = [];

//loopar igenom todo-listan och element med taggen article lagras i arrayen
for(i=0; i<todos.length; i++) {
    tempArr.push(todos[i].innerHTML);
}

//arrayen konverteras till en JSON-sträng
let jsonString = JSON.stringify(tempArr);

//lagras till web-storage
localStorage.setItem("todos", jsonString);

console.log(tempArr);

} 


//Läs in todo-list
function loadTodo() { 

    console.log("läser in todo-lista.."); 

//läser in todo-lista och konverterar från JSON tillbaka till array
    let todos = JSON.parse(localStorage.getItem("todos"));

//Loopar genom arayen
for (i = 0; i < todos.length; i++) {
    
    

//skapar fler element till todo-listan
let newTodoItem = document.createElement("article"); 
let newTextNode = document.createTextNode(todos[i]); 
newTodoItem.appendChild(newTextNode);

//lägger till i todo-listan 
    todoListEl.appendChild(newTodoItem); 

//Lägger till klickhanterare med en "anonym funktion" med ett elemnt (e). Det element som klickats på raderas från listan.
newTodoItem.addEventListener("click", function(e) {
    e.target.remove();

//Todo-listan lagras på nytt
saveTodo();

});
}
    //testar utskrift
    console.log(todos);
} 


//Rensa todo-list
function clearButton () {
    localStorage.clear();
    todoListEl.innerHTML = ""; 
        //anropa utskrift
        saveTodo();

        console.log("rensa todo-listan.."); 
} 