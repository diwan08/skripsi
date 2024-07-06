/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", t => {
    t.string("id").primary();
    t.string("name").notNullable();
    t.string("email").notNullable();
    t.string("password").notNullable();
    t.integer("otp",6)
    t.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("users")
};
