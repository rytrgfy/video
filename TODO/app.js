function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('task-list');

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}
