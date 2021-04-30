const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//crear tarea
//api/tareas
router.post(
  "/",
  auth,
  [check("nombre", "El Nombre es Obligatorio").not().isEmpty()],
  [check("proyecto", "El Proyecto es Obligatorio").not().isEmpty()],
  tareaController.crearTarea
);

//Obtener las tareas por proyecto
router.get("/", auth, tareaController.obtenerTareas);

module.exports = router;
