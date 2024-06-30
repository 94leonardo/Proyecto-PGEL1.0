import express from "express"; // Importa el módulo express para crear una aplicación web
import { PORT } from "./config.js"; // Importa la configuración del puerto desde el archivo config.js
import indexRoutes from "./routes/index.routes.js"; // Importa las rutas definidas en el archivo index.routes.js
import morgan from "morgan"; // Importa morgan para logging
import userRouter from "./routes/user.routes.js";
import eventRouter from "./routes/event.routes.js";





const app = express(); // Crea una instancia de la aplicación express

app.use(express.json()); // Usa express.json() para analizar solicitudes JSON
app.use(morgan("dev")); // Usa morgan para loguear peticiones HTTP
app.use(indexRoutes); // Usa las rutas importadas en la aplicación
app.use(userRouter);
app.use(eventRouter);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack); // Imprime el stack trace del error en la consola
  res.status(500).send("error"); // Envía una respuesta de error 500
});

// Inicia el servidor y maneja errores al iniciar
app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting server: ${err}`); // Imprime el error en caso de fallo
    process.exit(1); // Termina el proceso con código de error
  } else {
    console.log(`Server is running on port ${PORT}`); // Imprime un mensaje en la consola indicando que el servidor está en funcionamiento
  }
});
