
const form = document.getElementById('todo-form');
const taskInput = document.getElementById('new-task');
const todoList = document.getElementById('todo-list');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = taskInput.value; 

    if (taskText === '') return; 

    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Eliminar</button>
    `;

    
    li.addEventListener('click', function() {
        li.classList.toggle('completed'); 
    });

    
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove(); 
    });


    todoList.appendChild(li);


    taskInput.value = '';
});
