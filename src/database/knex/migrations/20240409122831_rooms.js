
exports.up = (knex) => {
    return knex.schema.createTable("rooms", (table) => {
        table.increments('id')
        table.string('Name').notNullable()
        table.string('place').notNullable()
        table.integer('numberStudent').notNullable()
        table.string('type').notNullable()
        table.boolean('disponibility').notNullable()
        table.integer("adm_id").unsigned().index().references("id").inTable("adms")

        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at").default(knex.fn.now());
    })
};

exports.down = (knex) => {
   return knex.schema.dropTable("rooms")
};
