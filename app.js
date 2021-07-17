const express = require("express");
const app = express();
let path = require("path");

let port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.listen(port, () => {
  console.log(
    `Servidor corriendo en ${port}\nAbrir en el navegador https://localhost:${port}`
  );
});
