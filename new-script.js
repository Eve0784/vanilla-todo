function saveTodo(event) {
    const myForm = document.getElementById("my-form"); // const myForm = event.target
    event.preventDefault();

    const todayDate = new Date().toISOString()

    const data = {
        title: myForm.title.value.trim(),
        description: myForm.description.value.trim(),
        creationDate: todayDate,
        endDate: myForm.enddate.value.trim(),
        color: myForm.color.value.trim(),
        done: false
    }

    createTodo(data)
        .then(result => {
            console.log('Creato: ', result);
            alert('Todo è stato creato');
            myForm.reset();
            window.location.assign('./')
        })
        .catch(error => {
            console.error(err);
            alert('Errore nella POST');
        });

}