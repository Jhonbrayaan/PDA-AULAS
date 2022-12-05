const express = require('express');
const app = express();
const port = 3333

app.set("view engine", "ejs") 
app.use(express.static(__dirname + "/public"))

app.get('/produtos' , (request, response) => {
    console.log('Requisição recebida')
    
    var listaProdutos = [
        {id: 0, name: 'Café'},
        {id: 1, name: 'água'},
        {id: 2, name: 'arroz'}
    ];

    return response.send(listaProdutos);
});

app.get('/home', (request, response) => {
    return response.render('index')
});

app.listen(port, () => {
    console.log(`rodando na porta: ${port}`)

});
