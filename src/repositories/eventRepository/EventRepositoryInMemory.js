
class EventRepositoryInMemory{
    events = []
    async createEvent({instructor_id, room_id, class_id, period}){
        const event = {
            event_id: Math.floor(Math.random() * 1000) + 1,
            instructor_id,
            room_id, 
            class_id, 
            period
        }
        this.events.push(event)
        return event
    }
    async listEvent(){
        return this.events
    }
    async listEventById({event_id}){
        const event = this.events.find(event => event.event_id === event_id)
        return event
    }
    async updateEvent({event_id, period}){
        const event = this.listEventById({event_id})

        event.period = period ?? event.period

        return event
    }
    async deleteEvent({event_id}){
        const index = this.events.findIndex(event => event.event_id === event_id)
        return this.events.slice(index)
    }
}
module.exports = EventRepositoryInMemory