const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const InstructorRepositoryInMemory = require("../../repositories/instructorRepository/InstructorRepositoryInMemory")
const ClassRepositoryInMemory = require("../../repositories/classRepository/ClassRepositoryInMemory")
const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const InstructorCreateService = require("../../services/InstructorServices/InstructorCreateService")
const ClassCreateService = require("../../services/ClassServices/ClassCreateService")
const RoomRepositoryInMemory = require("../../repositories/roomRepository/RoomRepositoryInMemory")
const RoomCreateService = require("../../services/RoomServices/RoomCreateService")
const EventRepositoryInMemory = require("../../repositories/eventRepository/EventRepositoryInMemory")
const EventCreateService = require("../../services/EventServices/EventCreateService")
const EventUpdateService = require("../../services/EventServices/EventUpdateService")



describe("eventCreateService", () => {
    let admRepository = null
    let admCreateService = null

    let instructorRepository = null
    let instructorCreateService = null

    let classRepository = null
    let classCreateService = null

    let roomRepository = null
    let roomCreateService = null

    let repository = null
    let eventCreateService = null
    let eventUpdateService = null

    beforeEach(() => {
        admRepository = new AdmRepositoryInMemory()
        admCreateService = new AdmCreateService(admRepository)
        
        instructorRepository = new InstructorRepositoryInMemory()
        instructorCreateService = new InstructorCreateService(instructorRepository)

        classRepository = new ClassRepositoryInMemory()
        classCreateService = new ClassCreateService(classRepository)

        roomRepository = new RoomRepositoryInMemory()
        roomCreateService = new RoomCreateService(roomRepository)

        repository = new EventRepositoryInMemory()
        eventCreateService = new EventCreateService(repository)
        eventUpdateService = new EventUpdateService(repository)
    })
    
    it("Event should be created", async () => {
        const adm = {
            name : "Aluno Escola Estuda",
            password : "aluno1602",
            email : "aluno@mail",
            fone : "984919755"
        }
        const admCreate = await admCreateService.execute(adm)

        const instructor = {
            name: "Instrutor Ensina Santos",
            password: "Instrutor123",
            email: "instrutor@mail.com",
            fone: "99958463",
            adm_id: admCreate.adm_id
        }
        const instructorCreate = await instructorCreateService.execute(instructor)

        const class1 = {
            name: "Administrativo",
            period: "Manhã",
            adm_id: admCreate.adm_id
        }

        const classCreate = await classCreateService.execute(class1)

        const room = {
            name: "Sala da Tecnologia",
            local: "senac",
            password: "2 andar",
            qnat_student: 10,
            type: "Informatica",
            adm_id: admCreate.adm_id
        }
        const roomCreate = await roomCreateService.execute(room)

        const event = {
            instructor_id: instructorCreate.instructor_id,
            room_id: roomCreate.room_id, 
            class_id: classCreate.class_id, 
            period: "Tarde"
        }

        const eventCreate = await eventCreateService.execute(event)

        eventCreate.period = "Noite"

        const eventUpdate = await eventUpdateService.execute(eventCreate)

        expect(eventUpdate).toHaveProperty("period", eventCreate.period);
    })

})