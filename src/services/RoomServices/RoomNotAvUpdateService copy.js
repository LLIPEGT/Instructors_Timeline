class RoomNotAvUpdateService{
    constructor(roomRepository){
        this.roomRepository = roomRepository
    }
    async execute({room_id}){
        const roomAvUpdated = await this.roomRepository.updateNotAvRoom({room_id})
        return roomAvUpdated
    }
  }
  
  module.exports = RoomNotAvUpdateService