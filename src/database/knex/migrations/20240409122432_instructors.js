
exports.up = (knex) => {
    return knex.schema.createTable("instructors", (table) => {
        table.increments('id')
        table.string('name').notNullable()
        table.string('password').notNullable()
        table.string('email').notNullable()
        table.string('qualification').notNullable()
        table.integer("adm_id").unsigned().index().references("id").inTable("adms")

        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at").default(knex.fn.now());
    })
};

exports.down = (knex) => {
    return knex.schema.dropTable("instructors")
};
