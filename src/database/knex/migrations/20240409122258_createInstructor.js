exports.up = knex => knex.schema.createTable("instructors", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("email").notNullable();
    table.text("password").notNullable();
    
    table.integer("adm_id").unsigned().index().references("id").inTable("adm")
});


exports.down = knex => knex.schema.dropTable("instructors")