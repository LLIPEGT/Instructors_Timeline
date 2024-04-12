class EventListService{
    constructor(eventRepository){
        this.eventRepository = eventRepository
    }
    async execute(){
        return await this.eventRepository.listEvent()
    
    }
  }
module.exports = EventListService