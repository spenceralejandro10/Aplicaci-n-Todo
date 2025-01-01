const inputField = document.querySelector('.input-container input');
const filters = document.querySelector('.filters');

// Agregar tareas
inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && inputField.value.trim() !== '') {
        const task = document.createElement('div');
        task.classList.add('task');
        task.textContent = inputField.value;

        // Marcar como completada
        task.addEventListener('click', () => {
            task.classList.toggle('completed');
        });

        filters.insertAdjacentElement('beforebegin', task);
        inputField.value = '';
    }
});

