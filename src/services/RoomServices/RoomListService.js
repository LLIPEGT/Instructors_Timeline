class RoomListService{
    constructor(roomRepository){
        this.roomRepository = roomRepository
    }
    async execute(){
        return await this.roomRepository.listRoom()
    
    }
  }
module.exports = RoomListService