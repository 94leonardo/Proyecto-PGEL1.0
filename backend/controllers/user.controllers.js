import { pool } from "../db.js";
import { usersSchema } from "../models/users.js";

//metodos para consultar usuarios registrados eventos en la base de datos
export const userSelects = async (req, res) => {
  try {
    // Realiza una consulta simple a la base de datos
    const [result] = await pool.query(
      "SELECT * FROM usuarios ORDER BY fecha_creacion ASC "
    );

    return res.status(200).send({
      status: "success",
      message: "usuarios consultados exitosa",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener las consulta",
    });
  }
};

//metodos para consultar un usuario registrado evento en la base de datos
export const userUnic = async (req, res) => {
  try {
    //obtener la consulta de  un unico usuario

    const [result] = await pool.query(
      "SELECT * FROM usuarios WHERE id_user = ?",
      [req.params.id]
    );

    if (result.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "ID no encontrado",
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Consulta id exitosa ",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener las consulta",
    });
  }
};

//metodos para crear usuarios eventos en la base de datos
export const userCreate = async (req, res) => {
  try {
    const {
      nombre,
      documento,
      email,
      password,
      pais,
      ciudad,
      celular,
      direccion,
    } = req.body;
    if (
      !nombre ||
      !documento ||
      !email ||
      !password ||
      !pais ||
      !ciudad ||
      !celular ||
      !direccion === undefined
    ) {
      return res.status(400).send({
        status: "error",
        message: "Todos los campos son obligatorios",
      });
    }

    //construir la consulta insert y lo valores usanado el esquema de la base de datos

    const { tableName, columns, required } = usersSchema;
    const placeholder = columns.map(() => "?").join(",");
    const values = columns.map((column) => req.body[column]);

    const query = `INSERT INTO ${tableName} (${columns.join(
      ","
    )}) VALUES (${placeholder})`;

    const [result] = await pool.query(query, values);

    return res.status(200).send({
      status: "success",
      message: "Usuario creado exitosamente",
      result: result,
    });
  } catch (error) {
    console.error("Error al crear el usuario: ", error);
    return res.status(500).json({
      status: "error",
      message: "Error al obtener las consulta",
      error: error.message,
    });
  }
};

//metodos para actualizar usuarios registrados eventos en la base de datos
export const userUpdate = async (req, res) => {
  try {
    const { tableName, columns } = usersSchema;
    //filtrar solo las columnas que esten en elreq.body
    const updateColumns = columns.filter((column) =>
      req.body.hasOwnProperty(column)
    );

    const setClause = updateColumns.map((column) => `${column} = ?`).join(",");
    const values = updateColumns.map((column) => req.body[column]);

    const query = `UPDATE ${tableName} SET ${setClause} WHERE id_user = ?`;
    values.push(req.params.id); // Añadir el id del usuario al final de los valores
    const [result] = await pool.query(query, values);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Id no encontrado",
      });
    }

    return res.status(200).send({
      status: "success",
      message: "Actualización de usuario exitosa",
      result,
    });
  } catch (error) {
    console.error("Error en la función userUpdate:", error);
    return res.status(500).json({
      status: "error",
      message: "Error al procesar la solicitud",
      error: error.message, // Incluir el mensaje de error para mayor claridad
    });
  }
};
//metodos para eliminar usuarios registrados eventos en la base de datos

export const userDelete = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM usuarios WHERE id_user = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Id no encontrado" });
    }

    return res.status(204).send({
      status: "success",
      message: "Eliminar eventos exitosa",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener las consulta",
      error: error.message,
    });
  }
};
