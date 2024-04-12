exports.up = knex => knex.schema.createTable("rooms", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("local").notNullable();
    table.integer("quant_student").notNullable();
    table.text("type").notNullable();
    table.boolean("available").defaultTo("false");

    table.integer("adm_id").unsigned().index().references("id").inTable("adm")
});


exports.down = knex => knex.schema.dropTable("rooms")