const formAddTask = document.querySelector('#formAddTask');
const removeList = document.querySelector('[data-toggle="removeAll"]');
removeList.addEventListener('click', function () {
    const taskList = document.querySelector(`.list-group`);
    taskList.innerHTML = '';
    localStorage.clear();
});
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
}

let countFirst = 0, countSecond = 0, countThird = 0;
for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) continue;
    const task = JSON.parse(localStorage[key]);
    switch (task.status) {
        case 1: countFirst++;
        break;
        case 2: countSecond++;
        break;
        case 3: countThird++;
        break;
            default: throw new Error('AAAAAAAAaa');
    }

    addTask(task);
}
$('.firstSpan').text(countFirst);
$('.secondSpan').text(countSecond);
$('.thirdSpan').text(countThird);

//localStorage, sessionStorage

