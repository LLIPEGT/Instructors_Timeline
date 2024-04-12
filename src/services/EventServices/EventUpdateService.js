class EventUpdateService{
    constructor(eventRepository){
        this.eventRepository = eventRepository
    }
    async execute({event_id, period}){
        const eventUpdated = await this.eventRepository.updateEvent({event_id, period})
        return eventUpdated
    }
  }
  
  module.exports = EventUpdateService