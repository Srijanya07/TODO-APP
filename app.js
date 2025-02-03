document.addEventListener('DOMContentLoaded', (event) => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task-input');
    const taskList = document.getElementById('task-list');

  
    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);

            newTaskInput.value = '';
        }
    }

    
    addTaskButton.addEventListener('click', addTask);

    
    newTaskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});