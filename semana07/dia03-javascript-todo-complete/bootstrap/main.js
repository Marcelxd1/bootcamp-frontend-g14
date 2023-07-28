const taskInput = document.querySelector('.task__input');
const taskList = document.querySelector('.task__list');
const btnClear = document.querySelector('.task__btnClear');



// const tasks = [
//     {
//         title: 'Estudiar Javascript',
//         isCompleted: false,
//     },
//     {
//         title: 'Receso a las 9',
//         isCompleted: false,
//     },
//     {
//         title: 'Realizar el reto',
//         isCompleted: false,
//     },
// ];

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

taskInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        const value =  taskInput.value;

        const newTask = {
            title: value,
            isCompleted: false,
        }
 
        tasks.push(newTask);
        taskInput.value = '';

        localStorage.setItem('tasks',JSON.stringify(tasks));

        renderTasks();
    }
})

btnClear.addEventListener('click', function() {
    tasks = tasks.filter(task => task.isCompleted ===true);
    
    localStorage.setItem('tasks',JSON.stringify(tasks));
    renderTasks();
})

function checkTask(event,index) {
    event.target.parentElement.classList.toggle('isChecked');
    tasks[index].isCompleted = !tasks[index].isCompleted;
}

function removeTask(event, index) {
    event.target.parentElement.remove();
    tasks.splice(index,1);

    localStorage.setItem('tasks',JSON.stringify(tasks));
    renderTasks();

}

function renderTasks() {
    let list = '';
    tasks.forEach(function(task, index){
        // console.log(task);
        list += `
            <li ${task.isCompleted? 'class = "list-group-item isChecked d-flex justify-content-beetwen"': 'class = "list-group-item d-flex justify-content-between"'}>
                <div class="d-flex gap-3 align-items-center">
                    <input type="checkbox" 
                    onchange="checkTask(event,  ${index})"
                    ${task.isCompleted? 'checked': ''}>
                    <span>${task.title}</span>
                </div>
                <button class="btn btn-danger" onclick="removeTask(event, ${index})">Borrar</button>
            </li>
        `
    })

    taskList.innerHTML = list;
}

renderTasks();