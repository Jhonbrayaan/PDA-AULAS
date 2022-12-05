const  alunos  =  [
    {  codigo : 4 ,  nome : 'Walmir' ,  turma : 1  } ,
    {  codigo : 6 ,  nome : 'Isaque' ,  turma : 3  } ,
    {  codigo : 3 ,  nome : 'Nicolly' ,  turma : 2  } ,
    {  codigo : 1 ,  nome : 'Maria' ,  turma : 3  } ,
    {  codigo : 2 ,  nome : 'Júlio' ,  turma : 2  } ,
    {  codigo : 5 ,  nome : 'Joãozinho' ,  turma : 1  } ,
    {  codigo : 7 ,  nome : 'Beatriz' ,  turma : 4  } ,
    {  codigo : 8 ,  nome : 'Eduardo' ,  turma : 4  } ,
  ]
  
  // A diferença entre map e for é que no map ele percorreu todos os itens de um array,
  // enquanto não podemos escolher a partir de qual item e até onde ele percorreu
  alunos . mapa ( aluno  =>  {
  
    switch ( aluno . turma )  {
        case 1:
        consola . log ( aluno . nome  +  'vai para Búzios' )
        quebrar ;
        case 2 :
        consola . log ( aluno . nome  +  'vai para Fernando Noronha' )
        quebrar ;
        case 3 :
        consola . log ( aluno .nome + ' vai para Osasco' )  
        quebrar ;
      padrão :
        consola . log ( aluno . nome  +  ' vai para Primavera do Leste' )
        quebrar ;
    }
  
  } )