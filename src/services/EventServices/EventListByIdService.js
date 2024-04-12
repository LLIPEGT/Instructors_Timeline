class EventListByIdService{
    constructor(eventRepository){
        this.eventRepository = eventRepository
    }
    async execute({event_id}){
        const eventList = await this.eventRepository.listEventById({event_id})
        return eventList
    }
  }
  
  module.exports = EventListByIdService