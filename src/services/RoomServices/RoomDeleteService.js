class RoomDeleteService{
    constructor(roomRepository){
        this.roomRepository = roomRepository
    }
    async execute({room_id}){
        const roomDelete = await this.roomRepository.deleteRoom({room_id})
        return roomDelete
    }
  }
  
  module.exports = RoomDeleteService