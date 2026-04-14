const input = document.querySelector('#task-input');
const button = document.querySelector('#add-btn');
const list = document.querySelector('#task-list');

button.addEventListener('click', () => {
  const value = input.value.trim();
  if (value === '') return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  checkbox.addEventListener('change', ()=> {
    li.classList.toggle('done', checkbox.checked);
  });

  const text = document.createElement('span');
  text.textContent = value;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Usuń';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
});