'use strict';

const taskNumber = document.querySelector('#task-number');
const taskCount = document.querySelector('#task-count');
const taskList = document.querySelector('#task-list');
const liTask = taskList.children;

const tasks = [
    { name: 'Recoger setas en el campo', completed: false },
    { name: 'Comprar pilas', completed: false },
    { name: 'Poner una lavadora de blancos', completed: false },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
];


function printTasks (){
    for (let task of tasks){
        const elementLi = document.createElement('li');
        elementLi.innerHTML = task.name;
        taskList.appendChild(elementLi);

        const elementCheckbox = document.createElement('input');
        elementCheckbox.setAttribute('type', 'checkbox');
        elementCheckbox.classList.add('checkbox');
        elementLi.appendChild(elementCheckbox);

        if(task.completed === true){;
            elementCheckbox.setAttribute('checked', 'true');
            elementLi.classList.add('complete-task');
        }

        function checkTask(){
            if (elementCheckbox.checked){
                task.completed = true;
                elementLi.classList.add('complete-task');
                console.log(`La tarea ${task.name} está completada: ${task.completed}`);

            } else {
                task.completed = false;
                elementLi.classList.remove('complete-task');
                console.log(`La tarea ${task.name} está completada: ${task.completed}`);
            };

            printCount();
        }

        elementCheckbox.addEventListener('change', checkTask);  
    }
}


////Print Total tasks

taskNumber.innerHTML = `Tienes un total de ${tasks.length} tareas: `;


////Print Completed and left tasks

function countCompleted(){
   return tasks.filter((obj) => obj.completed === true).length;
}

function countLeft(){
    return tasks.filter((obj) => obj.completed === false).length;
}

let updateCount = [countCompleted(), countLeft()];

function printCount(){
    updateCount = [countCompleted(), countLeft()];
    taskCount.innerHTML = `Has terminado ${updateCount[0]} y te quedan ${updateCount[1]} por hacer.`;
}

taskCount.innerHTML = `Has terminado ${updateCount[0]} y te quedan ${updateCount[1]} por hacer.`;


//taskList.addEventListener('click', printCount);
printTasks();

