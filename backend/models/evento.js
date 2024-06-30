export const eventosSchema = {
  tableName: "eventos",
  columns: [
    "id_even",
    "nombre_eve",
    "descripcion",
    "fecha",
    "ubicacion",
    "id_user",
    "created_at",
    "updated_at",
    "tipo_evento",
  ],
  required: ["nombre_eve"],
  foreignKeys: [
    {
      column: "id_user",
      references: {
        table: "usuarios",
        column: "id_user",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  ],
  timestamps: true,
};
