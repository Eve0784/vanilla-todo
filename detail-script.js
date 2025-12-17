function displayTodo(todo) {
    const titleHeader = document.getElementById('todo-title');
    titleHeader.innerHTML = todo.title;

    const colorContainer = document.createElement('span');
    // colorContainer.innerHTML = '<span style="font-weight: bold;">Colore: </span>';

    const colorBox = document.createElement('span');
    colorBox.style.display = 'inline-block';
    colorBox.style.width = '20px';
    colorBox.style.height = '20px';
    colorBox.style.borderRadius = '10px';
    colorBox.style.backgroundColor = todo.color;
    colorBox.style.marginLeft = '5px';
    colorBox.style.verticalAlign = 'middle';

    colorContainer.appendChild(colorBox);
    titleHeader.appendChild(colorContainer);

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
