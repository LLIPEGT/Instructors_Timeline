const {Router} = require("express")

const ClassController = require("../controllers/ClassController")
const checkAdmExist = require("../middlewares/checkAdmExists")
const checkClassExist = require("../middlewares/checkClassExists")
const ensureAuthenticatedAdm = require("../middlewares/ensureAuthenticatedAdm")

const classRoutes = Router()
const classController = new ClassController()

classRoutes.use(ensureAuthenticatedAdm)
classRoutes.post("/class/:adm_id",checkAdmExist, classController.createClass)
classRoutes.get("/class", classController.listClass)
classRoutes.get("/class/:class_id",checkClassExist, classController.listClassById)
classRoutes.patch("/class/:class_id",checkClassExist, classController.updateClass)
classRoutes.delete("/class/:class_id",checkClassExist, classController.deleteClass)

module.exports = classRoutes