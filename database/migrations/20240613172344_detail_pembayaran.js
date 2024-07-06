/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("detail_pembayaran", t => {
    t.string("id").primary();
    t.string("id_siswa").notNullable();
    t.foreign("id_siswa").references("id").inTable("siswa").onDelete("CASCADE");
    t.string("id_pembayaran").notNullable();
    t.foreign("id_pembayaran").references("id").inTable("pembayaran").onDelete("CASCADE");
    t.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("detail_pembayaran")
};
