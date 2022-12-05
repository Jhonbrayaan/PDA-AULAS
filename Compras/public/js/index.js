function alerta() {
  window.open('http://www.digitalhouse.com');
}

var altoContraste = false;
function acessibilidade() {
  var link = document.head.getElementsByTagName('link');
  var url = window.location.href;

  for (var i = 0; i <  link.length; i++) {

    console.log(link[i].href)

    if (altoContraste == false && link[i].href == url + 'css/geral.css') {
     link[i].href = url + 'css/geral_altoContraste.css';
     altoContraste = true;
    } else {
      link[i].href = url + 'css/geral.css'
      altoContraste = false;
    }
  }
}