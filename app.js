const buttonAddNewTask = document.querySelector('.button__add');
const buttonClearTask = document.querySelector('.button__clear');
const task = document.querySelector('.input__task');
const listTask = document.querySelector('.task__list');

buttonAddNewTask.addEventListener('click', () => {
    const taskName = document.querySelectorAll('.task__item p');
    
    taskName.forEach(element => {
        if (task.value.trim().toLowerCase() === element.textContent.trim().toLowerCase()) {
            alert('Task already exist');
            return;
        }

        let newTask = document.createElement('li');
        newTask.classList.add('task__item');
        let isCheck = document.createElement('input');
        isCheck.type = 'checkbox';
        isCheck.setAttribute('onclick', 'check(this)');
        let taskContent = document.createElement('p');
        taskContent.innerText = task.value;
        newTask.appendChild(isCheck);
        newTask.appendChild(taskContent);
        listTask.appendChild(newTask);
    });
});


function check(item) {
    if (item.checked == true) {
        item.nextSibling.style.textDecoration = 'line-through';
    } else {
        item.nextSibling.style.textDecoration = 'none';
    }
}

buttonClearTask.addEventListener('click', () => {
    while (listTask.lastElementChild) {
        listTask.removeChild(listTask.lastElementChild);
    }
});
