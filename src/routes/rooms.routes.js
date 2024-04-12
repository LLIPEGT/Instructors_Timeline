const {Router} = require("express")

const RoomController = require("../controllers/RoomController")
const checkAdmExist = require("../middlewares/checkAdmExists")
const checkRoomExist = require("../middlewares/checkRoomExists")
const ensureAuthenticatedAdm = require("../middlewares/ensureAuthenticatedAdm")



const roomRoutes = Router()
const roomController = new RoomController()

roomRoutes.use(ensureAuthenticatedAdm)
roomRoutes.post("/rooms/:adm_id",checkAdmExist, roomController.createRoom)
roomRoutes.get("/rooms", roomController.listRoom)
roomRoutes.get("/rooms/:room_id",checkRoomExist, roomController.listRoomById)
roomRoutes.patch("/rooms/:room_id",checkRoomExist, roomController.updateRoom)
roomRoutes.delete("/rooms/:room_id",checkRoomExist, roomController.deleteRoom)
roomRoutes.patch("/rooms/av/:room_id",checkRoomExist, roomController.updateAvRoom)
roomRoutes.patch("/rooms/notav/:room_id",checkRoomExist,roomController.updateNotAvRoom)

module.exports = roomRoutes