class RoomRepositoryInMemory {
    rooms = []
    async createRoom({name, local, quant_student, type, adm_id}) {
        const available = false
        const room = {
            room_id: Math.floor(Math.random() * 1000) + 1,
            name,
            local,
            quant_student,
            type,
            adm_id
        }

        this.rooms.push(room)
        return room
    }

    async listRoom(){
        return this.rooms
    }

    async listRoomById({room_id}){

        const room = this.rooms.find(room => room.room_id === room_id)
        return room
    }

    async updateRoom({room_id, name, local, quant_student, type}){
        const room = this.listRoomById({room_id})

        room.name = name ?? room.name
        room.local = local ?? room.local
        room.quant_student = quant_student ?? room.quant_student
        room.type = type ?? room.type

        return room
    }

    

    async deleteRoom({room_id}){
        const index = this.rooms.findIndex(room => room.room_id === room_id)
        return this.rooms.slice(index)
    }
}

module.exports = RoomRepositoryInMemory