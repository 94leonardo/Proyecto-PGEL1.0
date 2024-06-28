import { Router } from "express";
import {
  userCreate,
  userDelete,
  userSelects,
  userUnic,
  userUpdate,
} from "../controllers/user.controllers.js";

const router = Router();

router.get("/users", userSelects); //solicitar toda las tareas
router.get("/user/:id", userUnic); //obtener unica tarea por id
router.post("/create_user", userCreate); //crear tareas
router.put("/Update_user/:id", userUpdate); //actualizar
router.delete("/delete_user/:id", userDelete); //cual tarea eliminar por id

export default router;
