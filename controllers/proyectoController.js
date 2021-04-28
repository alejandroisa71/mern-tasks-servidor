const Proyecto = require("../models/Proyecto");

exports.crearProyecto = async (req, res) => {
  try {
    //Crear un nuevo Proyecto
    const proyecto = new Proyecto(req.body);

    //Guardar el creador via JWT
    proyecto.creador = req.usuario.id;

    //guardamos el proyecto
    proyecto.save();
    res.json(proyecto);
  } catch (error) {
    console.log(error);
    status(500).send("Hubo un error");
  }
};
