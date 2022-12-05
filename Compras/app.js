// const { principal } = require('./src/index')
// principal();

const { response } = require('express');
const express = require('express');
const path = require('path')
const port = 2004;
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', express.static(path.join(__dirname, 'public/')))

app.get('/mercadorias/mac', (request, response) => {
  /*var prodMac = [
    { cod: 1, name: 'Macbook Air', url: 'macbook-air' },
    { cod: 2, name: 'Macbook Pro', url: 'macbook-pro' },
    { cod: 3, name: 'iMac 24', url: 'imac-24' },
  ]
  response.send(prodMac)*/
});

// Função de callback
app.listen(port, function(){
  console.log('Servidor funcionando na porta ' + port);
});