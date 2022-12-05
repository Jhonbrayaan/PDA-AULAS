const  moment  =  exigir ('moment')


const  produtos  =  [
  {  id : 1 ,  nome : 'Arroz 5kg' ,  valor : 20.00 ,  qtd : 1  } ,
  {  id : 2 ,  nome : 'Feijão' ,  valor : 6 ,  qtd : 1  } ,
  {  id : 3 ,  nome : 'Açucar' ,  valor : 4.25 ,  qtd : 1  } ,
  {  id : 4 ,  nome : 'Batata' ,  valor : 5.90 ,  qtd : 1  } ,
  {  id : 5 ,  nome : 'Carne' ,  valor : 20.00 ,  qtd : 1  } ,
  {  id : 6 ,  nome : 'Miojo' ,  valor : 1.99 ,  qtd : 1  }
]

console.log ( '----------- Mercado DH ----------' )

data  =  momento ( ) . formato ( 'DD/MM/AAAA hh:mm' )

consola . log ( '----- Lista Produtos - '  +  data  +  ' -----' )
  valorTotal  =  0 ;
for  (   i = 0 ;  i  <  produtos . comprimento ;  i ++ )  {
  valorTotal  +=  produtos [ i ] . qtd  *  produtos [ i ] . valentia

  consola . log ( ` ${ produtos [ i ] . id } - $ { produtos [ i ] . nome } - $ { produtos [ i ] . qtd } ` )
}
consola . log ( '---> Total R$: '  +  valorTotal )