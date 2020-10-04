const form = document.querySelector('[data-form]');

function sendData(event) {
    event.preventDefault(); // Prevent default behavior of form

    const takeUrl = new URL(window.location);
    const id = takeUrl.searchParams.get('id');
    const isEdit = id != null;

    const cpfField = document.querySelector('[data-cpf]');
    const nameField = document.querySelector('[data-nome]');

    if (isEdit) {
        // eslint-disable-next-line no-undef
        if (cpfValidator(cpfField.value)) {
            // eslint-disable-next-line no-undef
            editClientAPI(nameField.value, cpfField.value, id).then(() => {
                // eslint-disable-next-line no-alert
                alert('Cliente editado com sucesso!!');
                // eslint-disable-next-line no-restricted-globals
                window.location.replace('./clientes.html');
            });
        } else {
            // eslint-disable-next-line no-alert
            alert('O campo CPF deve conter um CPF válido!!!');
        }
    } else {
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
}

form.addEventListener('submit', sendData);