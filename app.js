//requiriendo modulo express
const express = require('express');
//requerir path
const path = require ('path');

//almacenar express en una variable
const app = express();

app.use(express.static('public'));



//a app le pedimos el objeto get para definir rutas
//req representa la peticion del cliente
//res la respuesta del servidor
app.get('/', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/login.html'));
});

app.get('/productCart', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/productCart.html'));
});

app.get('/productDetail', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/productDetail.html'));
});




//a app le pedimos el metodo listen, que se encarga de levantar el servidor
app.listen(3000, () => 
console.log('funciona!')
);