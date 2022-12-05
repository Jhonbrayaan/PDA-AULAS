let  tortas  =  [ 'morango' , 'brigadeiro' ,  'sequilho' ,  'ameixa' ,  'doce de leite'  ] ;
  pedidos  =  [
  {  codigo : 1 ,  torta : 'brigadeiro' ,  cliente : 'Walmir'  } ,
  {  codigo : 2 ,  torta : 'ameixa' ,  cliente : 'Gutemberg'  }
]

  tortaVenda  =  tortas [ 3 ]
consola . log ( "Torta vendida: "  +  tortaVenda ) 

function  listaTortasEPedidos ( a ) {
  for (  i  =  0 ;  i  <  a . comprimento  ;  i ++ ) {
    if  ( um [ i ] . codigo )  {
      consola . log ( a [ i ] . codigo  +  ' - '  +  a [ i ] . torta )
    }  else  {
      consola . log ( a [ i ] ) ;
    }
  }
}

listaTortasEPedidos ( tortas )
consola . registro ( )
listaTortasEPedidos ( pedidos )
consola . registro ( )
listaTortasEPedidos ( [ 'Ana' ,  'Walmir' ,  'Laura' ] )