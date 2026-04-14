const input = document.querySelector('#task-input');
const button = document.querySelector('#add-btn');
const list = document.querySelector('#task-list');

button.addEventListener('click', () => {
  const value = input.value.trim();
  if (value === '') return;

  const li = document.createElement('li');
  li.textContent = value;
  list.appendChild(li);

  input.value = '';
});