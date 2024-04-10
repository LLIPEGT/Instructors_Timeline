
exports.up = (knex) => {
    return knex.schema.createTable("events", (table) => {
        table.increments('id')
        table.integer("instructor_id").unsigned().index().references("id").inTable("instructors")
        table.integer("room_id").unsigned().index().references("id").inTable("rooms")
        table.integer("class_id").unsigned().index().references("id").inTable("class")
        table.string('period').notNullable()

        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at").default(knex.fn.now());
    })
};


exports.down = (knex) => {
    return knex.schema.dropTable("events")
};
