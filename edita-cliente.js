const takeUrl = new URL(window.location);
const id = takeUrl.searchParams.get('id');
const isEdit = id != null;
if (isEdit) {
    const cpfField = document.querySelector('[data-cpf]');
    const nameField = document.querySelector('[data-nome]');
    // eslint-disable-next-line no-undef
    getClientByIdAPI(id).then((response) => {
        cpfField.value = response[0].cpf;
        nameField.value = response[0].nome;
    });
}