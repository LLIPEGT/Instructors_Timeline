exports.up = knex => knex.schema.createTable("class", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("period").notNullable();
    table.date("date_start").notNullable();
    table.date("date_end").notNullable();

    table.integer("adm_id").unsigned().index().references("id").inTable("adm")
});


exports.down = knex => knex.schema.dropTable("class")