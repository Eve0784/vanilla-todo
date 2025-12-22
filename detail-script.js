function displayTodo(todo) {
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;

    
    const colorDiv = document.getElementById('todo-color');
    colorDiv.style.backgroundColor = todo.color;

    const dato = document.getElementById('dati-todo');

    const description = document.createElement('p');
    description.innerHTML = todo.description;
    dato.appendChild(description);

    const creationDate = document.createElement('span');
    creationDate.innerHTML = '<span style="font-weight: bold;"> Data di creazione: </span>' + formaDate(todo.creationDate);
    dato.appendChild(creationDate);

    const endDate = document.createElement('span');
    endDate.innerHTML = '<span style="font-weight: bold;">Data di scadenza: </span>' + formaDate(todo.endDate);
    dato.appendChild(endDate);

    const isDone = document.createElement('span');
    isDone.innerHTML = '<span style="font-weight: bold;"> Stato: </span>' + (todo.done ? "Completato" : "Da completare");
    dato.appendChild(isDone);

    // Contenedor para los botones
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions-div');
        
        // Botón de delete
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '🗑️ Elimina';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('¿Sei sicuro di cancellare questo resgistro?')) {
                deleteTodo(todo.id).then(deleted => {
                    if (deleted) {
                        // Mostrar mensaje de éxito
                        showSuccessMessage('registro cancellato con successo!');
                        // Eliminar del array local
                        todos = todos.filter(t => t.id !== todo.id);
                        // Actualizar la vista
                        displayTodos(todos);
                    }
                });
            }
        });
        actionsDiv.appendChild(deleteBtn);
        dato.appendChild(actionsDiv);
        
}

function formaDate(dateIso) {
    const date = new Date(dateIso);
    // const formattedDate = `${date.getDate()}/${date.getMonth()+ 1}/${date.getDay()}/${date.getFullYear()}`;
    // return formattedDate;

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }
    return date.toLocaleDateString('it-IT', options);

}
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('todoId')
getTodo(id).then(result => displayTodo(result));



// Función para mostrar mensaje de éxito
function showSuccessMessage(message) {
    // Crear el elemento del mensaje
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.classList.add('success-message');
    
    // Agregar al body
    document.body.appendChild(messageDiv);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        messageDiv.classList.add('slide-out');
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 3000);
}