const express = require("express");
const path = require("path");
const { dbConnection } = require("./database/config");
require("dotenv").config();

//DBConfig

dbConnection();

// App de Express
const app = express();


//Lectura del body

app.use(express.json());


// Node Server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);
require("./sockets/socket");

// Path público
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// Mis rutas

app.use("/api/login",require('./routes/auth-routes'));


server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log("Servidor corriendo en puerto", process.env.PORT);
});
