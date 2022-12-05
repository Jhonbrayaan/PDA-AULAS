const moment = require('moment');
const { exibeTela, mutiplicaValor } = require('../lib/funcoesComuns.lib')
const { produtos } = require('../model/dados')

function listaProdutos() {
  let valorTotal = 0;
  
  for (let i=0; i < produtos.length; i++) {
    valorTotal += mutiplicaValor(produtos[i].qtd, produtos[i].valor)
  
    exibeTela(`${produtos[i].id} - ${produtos[i].nome} - ${produtos[i].qtd}`)
  }
  
  exibeTela('---> Total R$: ' + valorTotal)
}

exports.principal = () => {
  exibeTela('----------- Mercado Função ----------')

  const data = moment().format('DD/MM/YYYY hh:mm')
  exibeTela('----- Lista Produtos - ' + data + ' -----')
  
  listaProdutos()
}