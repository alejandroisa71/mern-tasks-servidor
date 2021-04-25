const express = require("express");
const conectarDB = require("./config/db");

//crear el servidor
const app = express();

//Conectar a la DB
conectarDB();

//puerto de la app
const PORT = process.env.PORT || 4000;

// Importar Rutas
app.use("/api/usuarios", require("./routes/usuarios"));

//arrancar la app
app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
