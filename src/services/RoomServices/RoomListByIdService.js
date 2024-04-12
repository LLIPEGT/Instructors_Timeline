class RoomListByIdService{
    constructor(roomRepository){
        this.roomRepository = roomRepository
    }
    async execute({room_id}){
        const roomList = await this.roomRepository.listRoomById({room_id})
        return roomList
    }
  }
  
  module.exports = RoomListByIdService