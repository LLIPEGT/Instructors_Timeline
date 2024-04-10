const {Router} = require("express")
const admRoutes = require("./adm.routes")
const routes = Router()

routes.use("/adm", admRoutes)

module.exports = routes