let add_button = document.getElementById('add_button');
let task_item = document.getElementsByClassName('task_item')
let input_text = document.getElementById('input_text')
let task_container = document.getElementById('task_container')
let new_input_text = document.getElementById('new_input_text')
let clear_button = document.getElementById('clear_button')
let delete_button = document.getElementById('delete_button')


function addTask(){

    /*Crea la seccion para la nueva task*/
    let newTask = document.createElement('section')
    /*Setea la seccion con la clase 'task_item'*/
    newTask.className = 'task_item';
    /*Crea nuevo elemento de texto h4*/
    new_input_text = document.createElement('h4')
    /*Asigna el input text al texto de la task*/
    new_input_text.innerHTML = input_text.value;
    /*Setea el id del nuevo texto para que cambie el formato*/
    new_input_text.id = 'new_input_text';
    /*Agrega el texto a la seccion de la nueva task*/
    newTask.appendChild(new_input_text);

    /*Crea el boton de delete task*/
    delete_button = document.createElement('img');
    /*Asigna path y id de imagen para el boton*/
    delete_button.src = 'resources/delete.png'
    delete_button.id = 'delete_button';
    /*Agrega boton a la seccion de task nueva*/
    newTask.appendChild(delete_button);

    /*Agrega la task completa al documento*/
    task_container.appendChild(newTask);

    input_text.value = "";

}

function clearTasks(){

    while(task_container.lastElementChild){
        task_container.removeChild(task_container.lastElementChild)
    }
}

function deleteTask(event){
    if(event.target && event.target.id === 'delete_button'){
        event.target.parentNode.remove();
    }
}


document.addEventListener('click', deleteTask);
add_button.addEventListener('click', addTask);
clear_button.addEventListener('click', clearTasks);
