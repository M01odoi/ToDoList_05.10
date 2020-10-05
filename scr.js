const formAddTask = document.querySelector('#formAddTask');

formAddTask.addEventListener('submit', handleFormAddSubmit);

function handleFormAddSubmit(event) {
    event.preventDefault();

    const task = {
        title: this.querySelector('[name="title"]').value,
        status: 1,
        //1. to do 2. inprog 3.done
        id: new Date().getTime()
    };
    localStorage.setItem(task.id, JSON.stringify(task));
    addTask(task);
    // this.querySelector('[name="title"]').value = '';
    $('#modalAddTask').modal('hide');
    this.reset();
}

function addTask(task) {
    const taskList = document.querySelector(`[data-status="${task.status}"]`);
    const taskListItem = document.createElement('li');
    taskListItem.classList.add('list-group-item');
    taskListItem.innerText = task.title;
    taskList.appendChild(taskListItem);
    // let $but =  $('<button>').appendTo(taskListItem);
    // $but.text('delete');
}

for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) continue;
    const task = JSON.parse(localStorage[key]);
    addTask(task);
}
//localStorage, sessionStorage
