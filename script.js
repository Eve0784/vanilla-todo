
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


        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions-div');

        let completeActionIcon;
        if (todo.done) {
            completeActionIcon = '↺'
        } else {
            completeActionIcon = '✔'
        }

        const completeBtn = document.createElement('button');
        completeBtn.classList.add('check-btn');
        completeBtn.appendChild(document.createTextNode(completeActionIcon));

        completeBtn.addEventListener('click', () => {
            changeDoneStatus(todo.id, !todo.done)
                .then(_ => {

                    todo.done = !todo.done;
                    displayTodos(todos);

                    // getAllTodos().then(results => {
                    //     todos = results;
                    //     displayTodos(todos);
                    // })
                })
        });

        actionsDiv.appendChild(completeBtn);

        const detailLink = document.createElement('a');
        detailLink.appendChild(document.createTextNode('🡺'));
        detailLink.classList.add('detail-link');
        detailLink.href = './detail.html?todoId=' + todo.id;
        actionsDiv.appendChild(detailLink);

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
