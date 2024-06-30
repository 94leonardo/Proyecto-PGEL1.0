// routes/eventoRoutes.js
import { Router } from "express";

import {
  crearEvento,
  obtenerEventos,
  obtenerEvento,
  actualizarEvento,
  eliminarEvento,
} from "../controllers/eventoController.js";
const router = Router();

router.post("/crear_evento", crearEvento);
router.get("/ver_eventos", obtenerEventos);
router.get("/ver_evento/:id", obtenerEvento);
router.put("/actualizar_evento/:id", actualizarEvento);
router.delete("/eliminar_evento/:id", eliminarEvento);

export default router;
