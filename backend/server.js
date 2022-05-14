/**
 * file: server.js
 * description: arquivo responsável por toda a configuração e execução da aplicação
 * data: 01/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongooseConnection = require("./src/config/mongooseConnection.config");

const app = express();

// ==> Rotas da API:
const index = require("./src/routes/index");
const userRoutes = require("./src/routes/user.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));
app.use(cors());

// ==> Retornando a conexão via mongoose via external file usando 'app.set()'
app.set("mongoose connection", mongooseConnection);

app.use(index);
app.use("/api/v1/", userRoutes);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação executando na porta...: ', port);
});
