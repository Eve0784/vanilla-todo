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