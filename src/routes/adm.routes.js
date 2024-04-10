const {Router} = require("express")
const AdmController = require("../controller/AdmController")
const admRoute = Router()
const admController = new AdmController()

admRoute.post("/", admController.create)
admRoute.get("/", admController.list)
admRoute.get("/:admId", admController.listId)

module.exports = admRoute