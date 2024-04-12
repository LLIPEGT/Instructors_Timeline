const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const RoomRepositoryInMemory = require("../../repositories/roomRepository/RoomRepositoryInMemory")

const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const RoomCreateService = require("../../services/RoomServices/RoomCreateService")
const RoomUpdateService = require("../../services/RoomServices/RoomUpdateService")

describe("roomDeleteService",  () => {

    let repository = null
    let roomCreateService = null
    let roomUpdateService = null

    let admRepository = null
    let admCreateService = null

    beforeEach(() => {
        admRepository = new AdmRepositoryInMemory()
        admCreateService = new AdmCreateService(admRepository)

        repository = new RoomRepositoryInMemory()
        roomCreateService = new RoomCreateService(repository)
        roomUpdateService = new RoomUpdateService(repository)
    })
    
    it("Room should be updated", async () => {
        const adm = {
            name : "Aluno Escola Estuda",
            password : "aluno1602",
            email : "aluno@mail",
            fone : "984919755"
        }
        const admCreate = await admCreateService.execute(adm)
        //console.log(admCreate);

        const room = {
            name: "Sala da Tecnologia",
            local: "senac",
            password: "2 andar",
            qnat_student: 10,
            type: "Informatica",
            adm_id: admCreate.adm_id
        }

        const roomCreate = await roomCreateService.execute(room)
        
        roomCreate.name = "Update"

        const updateRoom = await roomUpdateService.execute(roomCreate)
        //console.log(updateRoom);

        expect(updateRoom).toHaveProperty("name", updateRoom.name);

    })
})