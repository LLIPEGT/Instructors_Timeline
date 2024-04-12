const knex = require("../../database/knex")

class EventRepository{
    async createEvent({instructor_id, room_id, class_id, period}){
        const eventId = await knex("events").insert({instructor_id, room_id, class_id, period})
        return {id: eventId}
    }
    async listEvent(){
        const event = await knex("events")
        return event
    }
    async listEventById({event_id}){
        const event = await knex("events").where({id: event_id})
        return event
    }
    async updateEvent({event_id, period}){
        const event = await knex("events").where({id: event_id})

        event.period = period ?? event.period

        await knex("events").where({id: event_id}).update({period: event.period})

        return event
    }
    async deleteEvent({event_id}){
        const event = await knex("events").where({id: event_id}).delete()
        return event
    }
}
module.exports = EventRepository