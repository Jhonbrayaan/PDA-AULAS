function adicionarTarefa() {
  console.log("OK!")
  var input = document.getElementById("inputitulo")
  var tituloTarefa = input.value

  console.log(tituloTarefa)

  var item = document.createElement("li")
  item.innerHTML = tituloTarefa
  console.log(item)
}
