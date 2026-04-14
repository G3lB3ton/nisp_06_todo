const list = document.querySelector('#task-list');

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#task-list li').forEach(li => {
    tasks.push({
      text: li.querySelector('span').textContent,
      done: li.classList.contains('done')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const saved = JSON.parse(localStorage.getItem('tasks')) || [];
  saved.forEach(task => addTask(task.text, task.done));
}

function addTask(text, done = false) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = done;

  checkbox.addEventListener('change', () => {
    li.classList.toggle('done', checkbox.checked);
    saveTasks();
  });

  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Usuń';
  deleteBtn.classList.add('btn');

  deleteBtn.addEventListener('click', () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  if (done) li.classList.add('done');

  document.querySelector('#task-list').appendChild(li);
}

const input = document.querySelector('#task-input');
const button = document.querySelector('#add-btn');

button.addEventListener('click', () => {
  const value = input.value.trim();
  if (value === '') return;

  addTask(value);
  saveTasks();
  input.value = '';
});

window.addEventListener('DOMContentLoaded', loadTasks);
