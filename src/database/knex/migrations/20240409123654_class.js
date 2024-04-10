
exports.up = (knex) => {
    return knex.schema.createTable("class", (table) => {
        table.increments('id')
        table.string('name').notNullable()
        table.date('startDt').notNullable()
        table.date('finalDt')
        table.string('period').notNullable()
        table.integer("adm_id").unsigned().index().references("id").inTable("adms")

        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at").default(knex.fn.now());
    })
};

exports.down = (knex) => {
  return knex.schema.dropTable("class")
};
