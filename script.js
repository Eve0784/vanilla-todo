
function displayTodos(todos) {
    const todosContainer = document.getElementById('todos-container');
    todosContainer.innerHTML = '';

    for (const todo of todos) {
        const card = document.createElement('div');
        card.classList.add('todo-card');

        const colorDiv = document.createElement('div');
        colorDiv.classList.add('colored-dot');
        colorDiv.style.backgroundColor = todo.color;
        card.appendChild(colorDiv);

        const titleSpan = document.createElement('span');
        titleSpan.appendChild(document.createTextNode(todo.title));
        if (todo.done === true) {
            titleSpan.style.textDecoration = 'line-through'
        }
        card.appendChild(titleSpan);

        const remainingDays = document.createElement('span');
        remainingDays.innerHTML = calculateDaysRemaining(todo.endDate) + ' giorni alla scadenza';
        card.appendChild(remainingDays);

        // Contenedor para los botones
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions-div');
        
        // // Botón de delete
        // const deleteBtn = document.createElement('button');
        // deleteBtn.innerHTML = '🗑️';
        // deleteBtn.classList.add('delete-btn');
        // deleteBtn.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     if (confirm('¿Sei sicuro di cancellare questo resgistro?')) {
        //         deleteTodo(todo.id).then(deleted => {
        //             if (deleted) {
        //                 // Mostrar mensaje de éxito
        //                 showSuccessMessage('registro cancellato con successo!');
        //                 // Eliminar del array local
        //                 todos = todos.filter(t => t.id !== todo.id);
        //                 // Actualizar la vista
        //                 displayTodos(todos);
        //             }
        //         });
        //     }
        // });
        // actionsDiv.appendChild(deleteBtn);
        
        const linkDiv = document.createElement('div');
        linkDiv.classList.add('arrow-div')
        const detailLink = document.createElement('a');
        detailLink.appendChild(document.createTextNode('🡺'));
        detailLink.classList.add('detail-link');
        detailLink.href = './detail.html?todoId=' + todo.id;
        linkDiv.appendChild(detailLink);
        actionsDiv.appendChild(linkDiv);

        card.appendChild(actionsDiv);
        todosContainer.appendChild(card);
    
    }
}
// getAllTodos().then(results => displayTodos(results));


// due tasti nella home (lista di todo)
// 1) mette in ordine alfabetico
// 2) mette in ordine dal più nuovo al più vecchio in base alla creationDate

let todos = [];

getAllTodos().then(results => {
    todos = results;
    displayTodos(todos);
});

//---------------------------------ORDINA PER NOME -----------------------------//
function compareTitles(t1, t2) {
    return t1.title.localeCompare(t2.title);
}
function orderByTitle() {
    todos.sort(compareTitles);
    displayTodos(todos);
}

const orderByTitleBtn = document.getElementById('order-title');
orderByTitleBtn.addEventListener('click', orderByTitle);

//---------------------------------ORDINA PER DATA -----------------------------//
function compareDates(t1, t2) {
    return new Date(t2.creationDate) - new Date(t1.creationDate);
}

function orderByDate() {
    todos.sort(compareDates);
    displayTodos(todos);
}

const orderByDateBtn = document.getElementById('order-date');
orderByDateBtn.addEventListener('click', orderByDate);

function calculateDaysRemaining(endDate) {
    const today = new Date();
    const millSec = 86400000;
    return Math.ceil((new Date(endDate) - today) / millSec);
}

// 0) finire il task dato a lezione (quanti giorni mancano alla scadenza??)
// 1) personalizzare graficamente l'app
// 2) aggiungere un bottone delete nella pagina di dettaglio

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