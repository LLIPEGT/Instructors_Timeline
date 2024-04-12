class RoomUpdateService{
    constructor(roomRepository){
        this.roomRepository = roomRepository
    }
    async execute({room_id, name, local, quant_student, type}){
        const roomUpdated = await this.roomRepository.updateRoom({room_id, name, local, quant_student, type})
        return roomUpdated
    }
  }
  
  module.exports = RoomUpdateService