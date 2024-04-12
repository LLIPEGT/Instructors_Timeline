class EventDeleteService{
    constructor(eventRepository){
        this.eventRepository = eventRepository
    }
    async execute({event_id}){
        const eventDelete = await this.eventRepository.deleteEvent({event_id})
        return eventDelete
    }
  }
  
  module.exports = EventDeleteService