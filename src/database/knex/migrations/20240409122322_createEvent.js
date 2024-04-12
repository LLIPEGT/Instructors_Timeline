exports.up = knex => knex.schema.createTable("events", table => {
    table.increments("id");
    table.text("period").notNullable();

    table.integer("instructor_id").unsigned().index().references("id").inTable("instructors");
    table.integer("room_id").unsigned().index().references("id").inTable("rooms");
    table.integer("class_id").unsigned().index().references("id").inTable("class")
});


exports.down = knex => knex.schema.dropTable("events")