const bodyTable = document.querySelector('[data-body-table]');

const showClient = (name, cpf) => {
    const line = document.createElement('tr');
    const lineContent = `
    <td>${cpf}</td>
    <td>${name}</td>
    `;

    line.innerHTML = lineContent;
    return line;
};

// eslint-disable-next-line no-undef
listClients().then((clients) => {
    clients.forEach((client) => bodyTable.appendChild(showClient(client.nome, client.cpf)));
});