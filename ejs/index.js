const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("home");
});

app.listen(port, () => {
  console.log(`Servidor Iniciado: ${port}`);
});