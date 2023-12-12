const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");

const comidas = require("./controller/comida");
const adiestramiento = require("./controller/adiestramiento");
const desechos = require("./controller/desechos");
const mascotas = require("./controller/mascotas");
const medicamentos = require("./controller/medicamentos");
const nutricion = require("./controller/nutricionMascota");

const app = express();
const port = 3000;
dotenv.config();
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());
app.use(cors());
app.use(comidas);
app.use(adiestramiento);
app.use(desechos);
app.use(mascotas);
app.use(medicamentos);
app.use(nutricion);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
