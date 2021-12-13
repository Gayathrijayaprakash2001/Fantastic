document.addEventListener('DOMContentLoaded',gettodo)



const todoIn = document.querySelector(".to-in");
const todoBtn = document.querySelector(".to-btn");
const todoList = document.querySelector(".todo-list");



todoBtn.addEventListener('click',addto);
todoList.addEventListener('click',Del);




function addto(e)

{

 
  
    e.preventDefault();


const todoDiv = document.createElement('div')
todoDiv.classList.add('todo')


 
 const toLi = document.createElement('li');
 toLi.classList.add('todoItems')
 toLi.innerText = todoIn.value



todoDiv.appendChild(toLi);


todoStr(todoIn.value);





const trashbtn = document.createElement('button')
trashbtn.classList.add('trash')
trashbtn.innerHTML = "<i class='far fa-trash-alt'></i>"
todoDiv.appendChild(trashbtn)
todoList.appendChild(todoDiv)



todoIn.value = "";

}



function Del(e)


{

    const item = e.target;

    if(item.classList[0] === 'trash'){
        const todo = item.parentElement;

        
        removeLocal(todo)
        todo.remove();
        
    }

}




function todoStr(todo)

{

    let todos;

    if(localStorage.getItem('todos') === null)
    
    {
        todos = [];

    }
    else
    {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
  todos.push(todo)
  localStorage.setItem("todos",JSON.stringify(todos));
}




function gettodo(){

    let todos;

    if(localStorage.getItem('todos') === null)
    {
        todos = [];

    }
    else
    {
        todos = JSON.parse(localStorage.getItem('todos'));
    }


    todos.forEach(function(todo)
     {
        
        
const todoDiv = document.createElement('div')
todoDiv.classList.add('todo')

 
 
 const toLi = document.createElement('li');
 toLi.classList.add('todoItems')
 toLi.innerText = todo

 

todoDiv.appendChild(toLi);



const trashbtn = document.createElement('button')
trashbtn.classList.add('trash')
trashbtn.innerText = "Done";
todoDiv.appendChild(trashbtn)
todoList.appendChild(todoDiv)
    }
    );

}


function removeLocal(todo){

    let todos;

    if(localStorage.getItem('todos') === null)
    
    {
        todos = [];

    }else
    
    {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

const todoIndex = todo.children[0].innerText
todos.splice(todos.indexOf(todoIndex), 1)
localStorage.setItem("todos",JSON.stringify(todos));



}