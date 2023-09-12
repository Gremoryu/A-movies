// Desc: Archivo principal de la API
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { databaseService } = require('./databaseService');

const app = express();// Inicializa la aplicación.

app.use(bodyParser.json());// Middleware de body-parser

// Middleware de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
require('./routes')(app, databaseService());// Importa las rutas y las ejecuta.

app.listen(3003, () => {
  console.log('App listening on port http://localhost:3003');
}); // Inicia el servidor en el puerto 3003.