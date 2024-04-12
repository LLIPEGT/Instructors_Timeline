const {Router} = require("express")

const AdmController = require("../controllers/AdmController")
const checkAdmExist = require("../middlewares/checkAdmExists")
const ensureAuthenticatedAdm = require("../middlewares/ensureAuthenticatedAdm")


const admRoutes = Router()
const admController = new AdmController()


admRoutes.post("/adm", admController.createAdm)
admRoutes.use(ensureAuthenticatedAdm)
admRoutes.get("/adm", admController.listAdm)
admRoutes.get("/adm/:adm_id",  checkAdmExist,admController.listAdmById)
admRoutes.patch("/adm/:adm_id", checkAdmExist, admController.updateAdm)
admRoutes.delete("/adm/:adm_id", checkAdmExist, admController.deleteAdm)

module.exports = admRoutes