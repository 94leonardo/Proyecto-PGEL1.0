import { eventosSchema } from "../models/evento.js";
import { pool } from "../db.js";

// controllers/eventoController.js

// Crear un nuevo evento
export const crearEvento = async (req, res) => {
  try {
    const { nombre_eve, descripcion, fecha, ubicacion, id_user, tipo_evento } =
      req.body;
    if (
      !nombre_eve ||
      !descripcion ||
      !fecha ||
      !ubicacion ||
      !id_user ||
      !tipo_evento
    ) {
      return res.status(400).send({
        status: "error",
        message: "Todos los campos son obligatorios",
      });
    }
    const { tableName, columns, required } = eventosSchema;
    const placeholder = columns.map(() => "?").join(",");
    const values = columns.map((column) => req.body[column]);

    const query = `INSERT INTO ${tableName} (${columns.join(
      ","
    )}) VALUES (${placeholder})`;

    const [result] = await pool.query(query, values);

    return res.status(200).send({
      status: "success",
      message: "evento creado exitosamente",
      result: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al crear el evento",
    });
  }
};

// Obtener todos los eventos
export const obtenerEventos = async (req, res) => {
  try {
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un evento por ID
export const obtenerEvento = async (req, res) => {
  try {
    if (evento) {
      res.status(200).json(evento);
    } else {
      res.status(404).json({ error: "Evento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un evento
export const actualizarEvento = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un evento
export const eliminarEvento = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
