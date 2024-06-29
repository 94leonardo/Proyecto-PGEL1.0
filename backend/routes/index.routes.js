import Router from "express"; // Importa el Router de express para manejar rutas
import { pool } from "../db.js"; // Importa la pool de conexiones a la base de datos desde db.js

const router = Router(); // Crea una instancia de Router

// Ruta para verificar la conexión a la base de datos
router.get("/ping", async (req, res) => {
  try {
    // Realiza una consulta simple a la base de datos
    const [result] = await pool.query("SELECT 1 + 1 AS result");

    console.log(result[0]); // Imprime el resultado de la consulta en la consola
    res.json({
      status: "success",
      message: "pong",
      result: result[0],
    });
    // Envía una respuesta JSON con el mensaje "pong" y el resultado de la consulta
  } catch (error) {
    console.error("Error during database query:", error);
    // Imprime el error en la consola
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});
export default router; // Exporta el router para ser usado en otras partes de la aplicación
