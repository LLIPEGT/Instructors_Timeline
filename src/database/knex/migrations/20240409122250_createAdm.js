exports.up = knex => knex.schema.createTable("adm", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("email").notNullable();
    table.text("password").notNullable();
    table.text("fone").notNullable()
});


exports.down = knex => knex.schema.dropTable("adm")