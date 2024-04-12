class RoomCreateService{
    constructor(roomRepository){
        this.roomRepository = roomRepository
    }
    async execute({name, local, quant_student, type, adm_id}){
        const roomCreated = await this.roomRepository.createRoom({name, local, quant_student, type, adm_id})
        return roomCreated
    }
  }
  
  module.exports = RoomCreateService