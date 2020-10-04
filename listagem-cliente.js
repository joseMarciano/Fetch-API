const bodyTable = document.querySelector('[data-body-table]');

const showClient = (name, cpf, id) => {
    const line = document.createElement('tr');
    const lineContent = `
    <td>${cpf}</td>
    <td>${name}</td>
    <td>
        <button class="btn btn-danger" onClick = 'deleteClient(${id})'><i class="fa fa-trash"></i></button>
        <a href = "cadastro-clientes.html?id=${id}">
            <button class="btn btn-primary"><i class="fa fa-pencil"></i></button>
        </a>
    </td>
    `;
    line.innerHTML = lineContent;
    return line;
};

const deleteClient = (id) => {
    // eslint-disable-next-line no-undef
    deleteClientAPI(id).then(() => {
        alert('Cliente exluido com sucesso');
        // eslint-disable-next-line no-restricted-globals
        location.reload(); // Atualiza a página
    });
};

// eslint-disable-next-line no-undef
listClientsAPI().then((clients) => {
    clients.forEach((client) => bodyTable.appendChild(showClient(client.nome, client.cpf, client.id)));
});