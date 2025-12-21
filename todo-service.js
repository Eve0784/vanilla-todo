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
    const apiUrl = 'https://694115c8686bc3ca81658f52.mockapi.io/api/v1/todos/' + id;
    return fetch(apiUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore al cancellare il resgistro');
        }
        return true;
    })
    .catch(error => {
        console.error('Aiutooooooo!', error);
        alert('No è stato possibile cancellare il registro');
        return false;
    });
}