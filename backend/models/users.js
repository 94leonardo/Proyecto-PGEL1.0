export const usersSchema = {
  tableName: "usuarios",
  columns: [
    "nombre",
    "documento",
    "email",
    "password",
    "pais",
    "ciudad",
    "celular",
    "direccion",
  ],
  required: ["nombre", "documento", "email"],
};
