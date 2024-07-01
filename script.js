const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
	const task = taskInput.value;
	if (task) {
		const taskElement = document.createElement('li');
		taskElement.textContent = task;
		taskList.appendChild(taskElement);
		taskInput.value = '';
	}
}

taskList.addEventListener('click', toggleCompleted);

function toggleCompleted(event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('completed');
	}
}

