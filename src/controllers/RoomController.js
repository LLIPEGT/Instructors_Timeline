const RoomRepository = require("../repositories/roomRepository/RoomRepository")
const RoomAvUpdateService = require("../services/RoomServices/RoomAvUpdateService")
const RoomCreateService = require("../services/RoomServices/RoomCreateService")
const RoomDeleteService = require("../services/RoomServices/RoomDeleteService")
const RoomListByIdService = require("../services/RoomServices/RoomListByIdService")
const RoomListService = require("../services/RoomServices/RoomListService")
const RoomNotAvUpdateService = require("../services/RoomServices/RoomNotAvUpdateService copy")
const RoomUpdateService = require("../services/RoomServices/RoomUpdateService")

const roomRepository = new RoomRepository()
const roomCreateService = new RoomCreateService(roomRepository)
const roomListService = new RoomListService(roomRepository)
const roomListByIdService = new RoomListByIdService(roomRepository)
const roomUpdateService = new RoomUpdateService(roomRepository)
const roomDeleteService = new RoomDeleteService(roomRepository)
const roomAvUpdateService = new RoomAvUpdateService(roomRepository)
const roomNotAvUpdateService = new RoomNotAvUpdateService(roomRepository) 

class RoomController{
    async createRoom(req,res){
        const {adm_id} = req.params
        const {name, local, quant_student, type} = req.body
        
        await roomCreateService.execute({name, local, quant_student, type, adm_id})
        
        return res.status(201).json("Sala cadastrada com sucesso")
    }

    async listRoom(req,res){
       const roomRoom = await roomListService.execute()
       return res.status(200).json(roomRoom)
    }

    async listRoomById(req,res){
        const {room_id} = req.params

        const roomRoom = await roomListByIdService.execute({room_id})

        return res.status(200).json(roomRoom)
    }

    async updateRoom(req,res){
        const {room_id} = req.params
        const {name, local, quant_student, type} = req.body

        await roomUpdateService.execute({name, local, quant_student, type, room_id})

        return res.status(200).json("Sala atualizada com sucesso!")
    }

    async updateAvRoom(req,res){
        const {room_id} = req.params

        await roomAvUpdateService.execute({room_id})

        return res.status(200).json("Sala pega!")
    }

    async updateNotAvRoom(req,res){
        const {room_id} = req.params

        await roomNotAvUpdateService.execute({room_id})

        return res.status(200).json("Sala Devolvida!")
    }

    async deleteRoom(req,res){
    const {room_id} = req.params
    
    await roomDeleteService.execute({room_id})

        return res.status(200).json("Registro deletado com sucesso!")
    }

}
module.exports = RoomController