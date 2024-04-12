class RoomAvUpdateService{
    constructor(roomRepository){
        this.roomRepository = roomRepository
    }
    async execute({room_id}){
        const roomAvUpdated = await this.roomRepository.updateAvRoom({room_id})
        return roomAvUpdated
    }
  }
  
  module.exports = RoomAvUpdateService