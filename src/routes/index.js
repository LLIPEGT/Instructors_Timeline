const {Router} = require("express")
const admRoutes = require("./adm.routes")
const instructorRoutes = require("./instructors.routes")
const roomRoutes = require("./rooms.routes")
const classRoutes = require("./class.routes")
const eventRoutes = require("./event.routes")
const sessionRoutes = require("./session.routes")

const routes = Router()

routes.use("/", sessionRoutes)
routes.use("/", admRoutes)
routes.use("/", classRoutes)
routes.use("/", instructorRoutes)
routes.use("/", eventRoutes) 
routes.use("/", roomRoutes)

module.exports = routes
