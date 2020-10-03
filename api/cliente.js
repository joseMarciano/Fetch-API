const URL_HOST = 'http://localhost:4000/clientes';

const GET = fetch(URL_HOST);

/* O fetch retorna uma promisse .then(pego o json da resposta)
.then(retorno o json que vem como um array de objetos)
*/
const listClients = () => GET.then((params) => params.json()).then((json) => json);
const saveClient = (name, cpf) => {
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