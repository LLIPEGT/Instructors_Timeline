const knex = require("../database/knex")
const EventRepository = require("../repositories/eventRepository/EventRepository")
const EventCreateService = require("../services/EventServices/EventCreateService")
const EventDeleteService = require("../services/EventServices/EventDeleteService")
const EventListByIdService = require("../services/EventServices/EventListByIdService")
const EventListService = require("../services/EventServices/EventListService")
const EventUpdateService = require("../services/EventServices/EventUpdateService")

const eventRepository = new EventRepository()
const eventCreateService = new EventCreateService(eventRepository)
const eventListService = new EventListService(eventRepository)
const eventListByIdService = new EventListByIdService(eventRepository)
const eventUpdateService = new EventUpdateService(eventRepository)
const eventDeleteService = new EventDeleteService(eventRepository)

class EventController{
    async createEvent(req,res){
        const {instructor_id, room_id, class_id} = req.params
        const {period} = req.body
        
        await eventCreateService.execute({period, instructor_id, room_id, class_id})

        return res.status(201).json("Evento criado com sucesso")
    }

    async listEvent(req,res){
       const eventRoom = await eventListService.execute()
       return res.status(200).json(eventRoom)
    }

    async listEventById(req,res){
        const {event_id} = req.params

        const eventRoom = await eventListByIdService.execute({event_id})

        return res.status(200).json(eventRoom)
    }

    async updateEvent(req,res){
        const {event_id} = req.params
        const {period} = req.body

        await eventUpdateService.execute({period, event_id})

        return res.status(200).json("Evento atualizado com sucesso!")
    }

    async deleteEvent(req,res){
    const {event_id} = req.params
    
    await eventDeleteService.execute({event_id})

        return res.status(200).json("Registro deletado com sucesso!")
    }

}
module.exports = EventController