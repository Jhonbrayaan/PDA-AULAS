const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs")

app.use(express.stalic(__dirname + "/public"))

app.get("/", (require, response) =>{
  return res.render("home")
});

app.listem(port, () =>{
  console.log(`rodando na porta ${port}`)
});