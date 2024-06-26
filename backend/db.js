import { createPool } from "mysql2/promise"; // Importa la función createPool del módulo mysql2/promise para manejar conexiones a la base de datos MySQL
import dotenv from "dotenv"; // Importa dotenv para manejar variables de entorno

dotenv.config(); // Configura dotenv para usar variables de entorno

// Validación de la configuración de la base de datos
const {
  DB_HOST = "localhost",
  DB_PORT = 3306,
  DB_USER = "root",
  DB_PASSWORD = "54321",
  DB_NAME = "event_proyect",
} = process.env;

if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error("Missing required database configuration values.");
}

export const pool = new createPool({
  host: DB_HOST, // Dirección del servidor MySQL
  port: DB_PORT, // Puerto en el que el servidor MySQL está escuchando
  user: DB_USER, // Nombre de usuario para conectarse a la base de datos MySQL
  password: DB_PASSWORD, // Contraseña para conectarse a la base de datos MySQL
  database: DB_NAME, // Nombre de la base de datos a la que se conectará
});

// Ejemplo de uso asíncrono para establecer una conexión a la base de datos
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Database connection successful.");
    connection.release();
  } catch (error) {
    console.error("Database connection failed:", error);
  }
})();
