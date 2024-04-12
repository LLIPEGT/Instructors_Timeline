const {Router} = require("express")

const EventController = require("../controllers/EventController")
const checkInstructorExist = require("../middlewares/checkInstructorExists")
const checkClassExist = require("../middlewares/checkClassExists")
const checkRoomExist = require("../middlewares/checkRoomExists")
const checkEventExist = require("../middlewares/checkEventsExists")
const ensureAuthenticatedAdm = require("../middlewares/ensureAuthenticatedAdm")
const ensureAuthenticatedInstructor = require("../middlewares/ensureAuthenticatedInstructor")

const eventRoutes = Router()
const eventController = new EventController()

eventRoutes.get("/events/instructor",ensureAuthenticatedAdm, eventController.listEvent)
eventRoutes.get("/events/instructor/:event_id",ensureAuthenticatedAdm, checkEventExist, eventController.listEventById)

eventRoutes.use(ensureAuthenticatedAdm)
eventRoutes.post("/events/:instructor_id/:room_id/:class_id",checkInstructorExist,checkClassExist,checkRoomExist, eventController.createEvent)
eventRoutes.get("/events/adm",eventController.listEvent)
eventRoutes.patch("/events/:event_id",checkEventExist, eventController.updateEvent)
eventRoutes.delete("/events/:event_id",checkEventExist, eventController.deleteEvent)
eventRoutes.get("/events/adm/:event_id",checkEventExist, eventController.listEventById)

module.exports = eventRoutes