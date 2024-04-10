
exports.up = (knex) => {
    return knex.schema.createTable("adms", (table) => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('password').notNullable()
        table.string('email').notNullable()
        table.string('telefon').notNullable()

        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at").default(knex.fn.now());
    })
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("adms")
};
