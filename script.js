
function displayTodos(todos) {
    const todosContainer = document.getElementById('todos-container');
    todosContainer.innerHTML = '';

    for (const todo of todos) {
        const card = document.createElement('div');
        card.classList.add('todo-card');

        const titleSpan = document.createElement('span');
        titleSpan.appendChild(document.createTextNode(todo.title));
        if (todo.done === true) {
            titleSpan.style.textDecoration = 'line-through'
        }
        card.appendChild(titleSpan);

        // const detailBtn = document.createElement('button');
        // detailBtn.appendChild(document.createTextNode('⤏'));
        // detailBtn.classList.add('detail-btn');
        // detailBtn.addEventListener('click', () => {
        //     window.location.assign('./detail.html?todoId='+todo.id)
        // })
        // card.appendChild(detailBtn);

        const detailLink = document.createElement('a');
        detailLink.appendChild(document.createTextNode('🠞'));
        detailLink.classList.add('detail-link');
        detailLink.href = './detail.html?todoId='+todo.id;
        card.appendChild(detailLink)


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
orderByTitleBtn.addEventListener('click',orderByTitle);

//---------------------------------ORDINA PER DATA -----------------------------//
function compareDates(t1, t2) {
    return new Date(t2.creationDate) - new Date(t1.creationDate);
}

function orderByDate() {
    todos.sort(compareDates);
    displayTodos(todos);
}

const orderByDateBtn = document.getElementById('order-date');
orderByDateBtn.addEventListener('click',orderByDate);