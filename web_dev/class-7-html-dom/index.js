let todoIndex = 1;

function addTodo() {

    let todo = document.getElementById('todo');
    let todoValue = todo.value;
    if(todoValue == '') {
        return
    } 
    todo.value = "";
    
    let parentDiv = document.getElementById('todosList');

    let todoDiv = document.createElement('div');
    todoDiv.setAttribute('id', 'todo'+todoIndex);

    let todoSpan = document.createElement('span');
    todoSpan.innerHTML = todoValue

    todoDiv.appendChild(todoSpan);

    let todoButton = document.createElement('button');
    todoButton.innerHTML = 'Delete Todo'
    todoButton.setAttribute('onClick', 'deleteTodo('+ todoIndex +')');

    todoDiv.appendChild(todoButton);
    
    parentDiv.appendChild(todoDiv);
    todoIndex = todoIndex + 1;
}

function deleteTodo (index) {
    let divElement = document.getElementById('todo'+index);
    alert('Todo delete with id '+ index);
    divElement.parentElement.removeChild(divElement);
}