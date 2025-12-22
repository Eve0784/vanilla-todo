function displayTodo(todo) {
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;


    const colorDiv = document.getElementById('todo-color');
    colorDiv.style.backgroundColor = todo.color;

    const dato = document.getElementById('dati-todo');
    dato.innerHTML = '';

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
    deleteBtn.classList.add('status-btn');
    deleteBtn.innerHTML = '🗑️ Elimina';
    deleteBtn.addEventListener('click', deleteTodoAndRedirect);

    actionsDiv.appendChild(deleteBtn);

    // Boton de completar

    const statusBtn = document.createElement('button');
    statusBtn.classList.add('status-btn');
    statusBtn.addEventListener('click', changeStatus);
    if (todo.done) {
        statusBtn.innerHTML = '↺ Riattiva';
    }else{
        statusBtn.innerHTML = '✔ Completa'
    }
    actionsDiv.appendChild(statusBtn);

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
const id = searchParams.get('todoId');
let selectedTodo;

getTodo(id).then(result => {
    selectedTodo = result;
    displayTodo(result)
});


function deleteTodoAndRedirect() {
    if (confirm("Vuoi veramente cancellare il todo???")) {
        deleteTodo(selectedTodo.id).then(_ => {
            window.location.assign('./')
        });  
    }
}

function changeStatus() {
    changeDoneStatus(selectedTodo.id, !selectedTodo.done)
    .then(_ => {
        selectedTodo.done = !selectedTodo.done;
        displayTodo(selectedTodo);
    })
}