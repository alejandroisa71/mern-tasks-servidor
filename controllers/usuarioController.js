const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) => {
  try {
    let usuario;

    //Crea el nuevo usuario
    usuario = new Usuario(req.body);

    //guardar usuario
    await usuario.save();

    //Mensaje de confirmacion
    res.send("usuario creado correctamente");
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
