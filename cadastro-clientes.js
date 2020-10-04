const form = document.querySelector('[data-form]');

function sendData(event) {
    event.preventDefault(); // Prevent default behavior of form
    const cpfField = document.querySelector('[data-cpf]').value;
    const nameField = document.querySelector('[data-nome]').value;

    // eslint-disable-next-line no-undef
    if (cpfValidator(cpfField)) {
        // eslint-disable-next-line no-undef
        saveClientAPI(nameField, cpfField).then(() => {
            // eslint-disable-next-line no-alert
            alert('Cliente salvo com sucesso!!');
            // eslint-disable-next-line no-restricted-globals
            location.reload(); // Atualiza a página
        });
    } else {
        // eslint-disable-next-line no-alert
        alert('O campo CPF deve conter um CPF válido!!!');
    }
}

form.addEventListener('submit', sendData);