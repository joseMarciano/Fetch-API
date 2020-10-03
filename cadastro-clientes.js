const form = document.querySelector('[data-form]');

function sendData(event) {
    event.preventDefault(); // Prevent default behavior of form
    const cfpField = document.querySelector('[data-cpf]');
    const nameField = document.querySelector('[data-nome]');
    // eslint-disable-next-line no-undef
    saveClient(nameField.value, cfpField.value);
}

form.addEventListener('submit', sendData);