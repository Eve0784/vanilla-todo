function displayTodo(todo) {
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;

    const dato = document.getElementById('dati-todo');
    // dato.innerHTML = '';

    const description = document.createElement('p');
    description.appendChild(document.createTextNode('Descrizione: ' + todo.description));
    dato.appendChild(description);

    const creationDate = document.createElement('span');
    creationDate.appendChild(document.createTextNode('Data di creazione: ' + todo.creationDate));
    dato.appendChild(creationDate);

    const endDate = document.createElement('span');
    endDate.appendChild(document.createTextNode('Data di scadenza: ' + todo.endDate));
    dato.appendChild(endDate);

    const colorContainer = document.createElement('span');
    colorContainer.appendChild(document.createTextNode('Colore: '));

    const colorBox = document.createElement('span');
    colorBox.style.display = 'inline-block';
    colorBox.style.width = '20px';
    colorBox.style.height = '20px';
    colorBox.style.backgroundColor = todo.color;
    colorBox.style.border = '1px solid #000';
    colorBox.style.marginLeft = '5px';
    colorBox.style.verticalAlign = 'middle';

    colorContainer.appendChild(colorBox);
    colorContainer.appendChild(document.createTextNode(' ' + todo.color));

    dato.appendChild(colorContainer);

    const isDone = document.createElement('span');
    isDone.appendChild(document.createTextNode('Finito: ' + (todo.done ? "sì" : "no")));
    dato.appendChild(isDone);



}

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('todoId')
getTodo(id).then(result => displayTodo(result))
