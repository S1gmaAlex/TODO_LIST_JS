window.addEventListener('load', () => {
    const form = document.querySelector(".task-form");
    const input = document.querySelector(".task-input");

    const listElement = document.querySelector(".tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add('task-content');

        const contentElement = document.createElement('input');
        contentElement.classList.add('content');
        contentElement.type = 'text';
        contentElement.value = task;
        contentElement.setAttribute('readonly', 'readonly');

        const taskActionsElement = document.createElement('div');
        taskActionsElement.classList.add('task-actions');

        const editElement = document.createElement('button');
        editElement.classList.add('edit');
        editElement.innerText = 'EDIT';

        const deleteElement = document.createElement('button');
        deleteElement.classList.add('delete');
        deleteElement.innerText = 'DELETE';

        listElement.appendChild(taskElement);
        taskElement.appendChild(taskContentElement);
        taskContentElement.appendChild(contentElement);
        taskElement.appendChild(taskActionsElement);
        taskActionsElement.appendChild(editElement);
        taskActionsElement.appendChild(deleteElement);

        input.value = '';
        editElement.addEventListener('click', (e) => {
            if (editElement.innerText == "EDIT") {
                editElement.innerText = 'SAVE';
                contentElement.removeAttribute("readonly");
                contentElement.style = "color: rgb(219, 68, 186);";
                contentElement.focus();
            } else {
                editElement.innerText = "EDIT";
                contentElement.setAttribute("readonly", "readonly");
                contentElement.style = "color: black;";
            }
        })

        deleteElement.addEventListener('click', (e) => {
            listElement.removeChild(taskElement);
        })

        if (!task) {
            //console.log('nothing');
            alert('YO BRO!!, write something?');
            listElement.removeChild(taskElement);
        }
    })
})