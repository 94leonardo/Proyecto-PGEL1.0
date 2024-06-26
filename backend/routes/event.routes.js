import { Router } from "express";
import {
  EventsCreate,
  EventsUpdate,
  EventsDelete,
  EventsSelect,
  EventsSelects
} from "../controllers/event.controllers.js";

const router = Router();

router.get("/consultarS-event", EventsSelects); //solicitar toda las tareas
router.get("/consultarUn-event/:id", EventsSelect); //obtener unica tarea por id
router.post("/create-event", EventsCreate); //crear tareas
router.put("/Update-event/:id", EventsUpdate); //actualizar
router.delete("/delete-event/:id", EventsDelete); //cual tarea eliminar por id

export default router;
