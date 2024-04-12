const {Router} = require("express")
const SessionCrontroller = require("../controllers/SessionController")

const sessionController = new SessionCrontroller()
const sessionRoutes = Router()

sessionRoutes.post("/login/adm", sessionController.admCreate)
sessionRoutes.post("/login/instructors", sessionController.InstructorCreateService)

module.exports = sessionRoutes