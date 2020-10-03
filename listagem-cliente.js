const bodyTable = document.querySelector('[data-body-table]');

const showClient = (name, cpf, id) => {
    const line = document.createElement('tr');
    const lineContent = `
    <td>${cpf}</td>
    <td>${name}</td>
    <td><button class="btn btn-danger" onClick = 'removeClient(${id})'><i class="fa fa-trash"></i></button></td>
    `;

    line.innerHTML = lineContent;
    return line;
};

const removeClient = (id) => {
    // eslint-disable-next-line no-undef
    deleteClient(id).then(() => {
        alert('Cliente exluido com sucesso');
        // eslint-disable-next-line no-restricted-globals
        location.reload(); // Atualiza a página
    });
};

// eslint-disable-next-line no-undef
listClients().then((clients) => {
    clients.forEach((client) => bodyTable.appendChild(showClient(client.nome, client.cpf, client.id)));
});