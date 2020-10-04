const URL_HOST = 'http://localhost:4000/clientes';

/* O fetch retorna uma promisse .then(pego o json da resposta)
.then(retorno o json que vem como um array de objetos)
*/
const listClientsAPI = () => fetch(URL_HOST).then((params) => params.json()).then((json) => json);
const saveClientAPI = (name, cpf) => {
    /* const dataConverted = JSON.stringify({ poderia usar assim tbm
        name:name,
        cpf:cpf
    }); */
    const dataConverted = JSON.stringify({
        nome: name,
        /* nesse caso precisei fazer o parsing de
                           'nAme' para 'nOme' por causa do back-end */
        cpf
    });
    return fetch(`${URL_HOST}/cliente`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: dataConverted
    }).then((response) => response.body);
};

const deleteClientAPI = (id) => fetch(`${URL_HOST}/cliente/${id}`, {
    method: 'DELETE'
});

const getClientByIdAPI = (id) => fetch(`${URL_HOST}/cliente/${id}`)
    .then((params) => params.json())
    .then((response) => response);

const editClientAPI = (name, cpf, id) => {
    const dataConverted = JSON.stringify({
        id,
        nome: name,
        cpf
    });
    return fetch(`${URL_HOST}/cliente/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: dataConverted
    }).then((response) => response.body);
};