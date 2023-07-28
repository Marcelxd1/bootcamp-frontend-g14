const taskInput = document.querySelector('.task__input');
const taskAdd = document.querySelector('.task__add');
const taskList = document.querySelector('.task__list');

taskAdd.addEventListener('click', function (){
    // const button = document.createElement('button');
    // button.innerText = 'Hole'
    if(taskInput.value === ''){
        alert('El campo es requerido');
        return;
    }

    const li = document.createElement('li');

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    li.appendChild(checkBox);

    let span = document.createElement('span');
    span.innerText = taskInput.value;
    li.appendChild(span);

    let button = document.createElement('button');
    button.innerText = 'Borrar'
    li.appendChild(button);


    taskList.appendChild(li);

    taskInput.value = '';
})

taskList.addEventListener('click', function(event){
    const target = event.target;

    if(target.tagName === 'INPUT' && target.type === 'checkbox'){
        target.classList.toggle('checked');
    }

    if(target.tagName === 'BUTTON'){
        target.parentElement.remove();
    }

})