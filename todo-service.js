function getAllTodos() {
    const apiUrl = 'https://694115c8686bc3ca81658f52.mockapi.io/api/v1/todos';
    return fetch(apiUrl)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.error('Aiutooooooo!', error));
}

function getTodo(id) {
    const apiUrl = 'https://694115c8686bc3ca81658f52.mockapi.io/api/v1/todos/' + id;
    return fetch(apiUrl)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.error('Aiutooooooo!', error));
}


// Función para eliminar un todo del API
function deleteTodo(id) {

    const apiUrl = "https://694115c8686bc3ca81658f52.mockapi.io/api/v1/todos/" + id;

    return fetch(apiUrl, {method: 'DELETE'})
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error))
}

function changeDoneStatus(id, newStatus) {
    const apiUrl = 'https://694115c8686bc3ca81658f52.mockapi.io/api/v1/todos/' + id
    return fetch(apiUrl, {
        method: 'PATCH',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({ done: newStatus })
    }).then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiutooooooo!', error))
}


function createTodo(todo) {
    const apiUrl = "https://694115c8686bc3ca81658f52.mockapi.io/api/v1/todos";
    return fetch(apiUrl, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(todo)
    })
    .then((response) => response.json())
    .then(todo => todo)
    .catch(error => console.error("Aiutoo", error));
}