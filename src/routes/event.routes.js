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


eventRoutes.use(ensureAuthenticatedAdm)
eventRoutes.post("/events/:instructor_id/:room_id/:class_id",checkInstructorExist,checkClassExist,checkRoomExist, eventController.createEvent)
eventRoutes.patch("/events/:event_id",checkEventExist, eventController.updateEvent)
eventRoutes.delete("/events/:event_id",checkEventExist, eventController.deleteEvent)
eventRoutes.use(ensureAuthenticatedInstructor)
eventRoutes.get("/events", eventController.listEvent)
eventRoutes.get("/events/:event_id",checkEventExist, eventController.listEventById)

module.exports = eventRoutes