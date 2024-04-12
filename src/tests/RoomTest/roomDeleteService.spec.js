const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const RoomRepositoryInMemory = require("../../repositories/roomRepository/RoomRepositoryInMemory")

const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const RoomCreateService = require("../../services/RoomServices/RoomCreateService")
const RoomListService = require("../../services/RoomServices/RoomListService")
const RoomDeleteService = require("../../services/RoomServices/RoomDeleteService")

describe("roomDeleteService",  () => {

    let repository = null
    let roomCreateService = null
    let roomListService = null
    let roomDeleteService = null

    let admRepository = null
    let admCreateService = null

    beforeEach(() => {
        admRepository = new AdmRepositoryInMemory()
        admCreateService = new AdmCreateService(admRepository)

        repository = new RoomRepositoryInMemory()
        roomCreateService = new RoomCreateService(repository)
        roomListService = new RoomListService(repository)
        roomDeleteService = new RoomDeleteService(repository)
    })
    
    it("Should be possibility delete an room ", async () => {
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

        const room2 = {
            name: "Sala da Teste",
            local: "senac",
            password: "2 andar",
            qnat_student: 10,
            type: "Teste",
            adm_id: admCreate.adm_id
        }

        const firstRoom = await roomCreateService.execute(room);
        const secondRoom = await roomCreateService.execute(room2);

        const listRooms = await roomListService.execute()

        const deleteRoom = await roomDeleteService.execute(room)

        expect(deleteRoom).not.toHaveProperty("name", deleteRoom.name);
    })
})