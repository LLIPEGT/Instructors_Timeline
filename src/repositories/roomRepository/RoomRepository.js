const knex = require("../../database/knex")
const AppError = require("../../utils/AppError");

class RoomRepository {
    async createRoom({name, local, quant_student, type, adm_id}) {
        const available = false
        const roomId = await knex("rooms").insert({name, local, quant_student, type, available, adm_id})
        return {id: roomId}
    }

    async listRoom(){
        const room = await knex("rooms")
        return room
    }

    async listRoomById({room_id}){

        const room = await knex("rooms").where({id: room_id})
        return room
    }

    async updateRoom({room_id, name, local, quant_student, type}){
        const room = await knex("rooms").where({id: room_id})

        room.name = name ?? room.name
        room.local = local ?? room.local
        room.quant_student = quant_student ?? room.quant_student
        room.type = type ?? room.type

        await knex("rooms").where({id: room_id}).update({name: room.name,local: room.local,quant_student, type: room.quant_student,type: room.type})

        return room
    }

    async updateAvRoom({room_id}){
        const [room] = await knex("rooms").where({id: room_id})

        if(!room.available){
            room.available = true
           
        }
        else{
            throw new AppError("Sala Indisponivel", 401)
        }
        await knex("rooms").where({id: room_id}).update({available: room.available})
        
        return room.available
    }

    async updateNotAvRoom({room_id}){
        const [room] = await knex("rooms").where({id: room_id})
        
        if(room.available == true){
            room.available = false
            
        }
        else{
            throw new AppError("A sala já foi devolvida, NÃO TENTE NUNCA MAIS OTARIO", 401)
        }
        await knex("rooms").where({id: room_id}).update({available: room.available})

        return room.available
    }

    async deleteRoom({room_id}){
        const room = await knex("rooms").where({id: room_id}).delete()
        return room
    }
}

module.exports = RoomRepository