const response = fetch('http://localhost:4000/clientes');

/* O fetch retorna uma promisse .then(pego o json da resposta)
.then(retorno o json que vem como um array de objetos)
*/
// eslint-disable-next-line no-console
response.then((params) => params.json()).then((json) => console.log(json));