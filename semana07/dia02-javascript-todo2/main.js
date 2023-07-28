const taskInput = document.querySelector('.task__input');
const taskList = document.querySelector('.task__list');


const tasks = [];

taskInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        const value =  taskInput.value;

        const newTask = {
            title: value,
            isCompleted: false,
        }

        tasks.push(newTask);
        taskInput.value = '';

        renderTasks();
        console.log(tasks)
    }
})

function checkTask(event,index) {
    // console.log("funcione");
    event.target.parentElement.classList.toggle('isChecked');
    tasks[index].isCompleted = !tasks[index].isCompleted;
}

function removeTask(event, index) {
    event.target.parentElement.remove();
    tasks.splice(index,1);
}

function renderTasks() {
    let list = '';
    tasks.forEach(function(task, index){
        // console.log(task);
        list += `
            <li ${task.isCompleted? 'class = "isChecked"': ''}>
                <input type="checkbox" 
                onchange="checkTask(event,  ${index})"
                ${task.isCompleted? 'checked': ''}>
                <span>${task.title}</span>
                <button onclick="removeTask(event, ${index})">Borrar</button>
            </li>
        `
    })

    taskList.innerHTML = list;
}

