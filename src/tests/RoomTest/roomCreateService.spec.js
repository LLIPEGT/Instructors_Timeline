const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const RoomRepositoryInMemory = require("../../repositories/roomRepository/RoomRepositoryInMemory")

const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const RoomCreateService = require("../../services/RoomServices/RoomCreateService")

describe("roomCreateService",  () => {

    let repository = null
    let roomCreateService = null

    let admRepository = null
    let admCreateService = null

    beforeEach(() => {
        admRepository = new AdmRepositoryInMemory()
        admCreateService = new AdmCreateService(admRepository)

        repository = new RoomRepositoryInMemory()
        roomCreateService = new RoomCreateService(repository)
    })
    
    it("Room should be created", async () => {
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
        //console.log(roomCreate);

        expect(roomCreate).toHaveProperty("adm_id", roomCreate.adm_id);

    })
})