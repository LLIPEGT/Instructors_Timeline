class EventCreateService{
    constructor(eventRepository){
        this.eventRepository = eventRepository
    }
    async execute({period, instructor_id, room_id, class_id}){
        const eventCreated = await this.eventRepository.createEvent({period, instructor_id, room_id, class_id})
        return eventCreated
    }
  }
  
  module.exports = EventCreateService