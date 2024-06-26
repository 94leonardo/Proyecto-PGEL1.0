import { pool } from "../db";

//metodos para consultar eventos en la base de datos
export const EventsSelects = (req, res) => {
  try {
    return res.status(200).send({
      status: "success",
      message: "Metodo para obtener consulta exitosa",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener las consulta",
    });
  }
};

//metodos para consultar un evento en la base de datos
export const EventsSelect = (req, res) => {
  try {
    return res.status(200).send({
      status: "success",
      message: "Metodo para obtener consulta id exitosa ",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener las consulta",
    });
  }
};

//metodos para crear eventos en la base de datos
export const EventsCreate = async (req, res) => {
  try {
    const { nombre, documento } = req.body;
    const result = await pool.query(
      "INSERT INTO usuarios(nombre,documento) VALUES(?, ?)",
      [nombre, documento]
    );

    return res.status(200).send({
      status: "success",
      message: "Metodo para obtener Crear consulta exitosa",
      
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener las consulta",
    });
  }
};

//metodos para actualizar eventos en la base de datos
export const EventsUpdate = (req, res) => {
  try {
    return res.status(200).send({
      status: "success",
      message: "Metodo para  Atualizar consulta exitosa",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener las consulta",
    });
  }
};

//metodos para eliminar eventos en la base de datos

export const EventsDelete = (req, res) => {
  try {
    return res.status(200).send({
      status: "success",
      message: "Metodo para Eliminar eventos exitosa",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener las consulta",
    });
  }
};
