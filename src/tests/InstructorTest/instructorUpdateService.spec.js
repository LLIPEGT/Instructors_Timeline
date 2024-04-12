const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const InstructorRepositoryInMemory = require("../../repositories/instructorRepository/InstructorRepositoryInMemory")

const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const InstructorCreateService = require("../../services/InstructorServices/InstructorCreateService")
const InstructorUpdateService = require("../../services/InstructorServices/InstructorUpdateService")

describe("instructorUpdateService",  () => {

    let repository = null
    let instructorCreateService = null
    let instructorUpdateService = null

    let admRepository = null
    let admCreateService = null

    beforeEach(() => {
        admRepository = new AdmRepositoryInMemory()
        admCreateService = new AdmCreateService(admRepository)

        repository = new InstructorRepositoryInMemory()
        instructorCreateService = new InstructorCreateService(repository)
        instructorUpdateService = new InstructorUpdateService(repository)
    })
    
    it("Instructor should be update", async () => {
        const adm = {
            name : "Aluno Escola Estuda",
            password : "aluno1602",
            email : "aluno@mail",
        }
        const admCreate = await admCreateService.execute(adm)
        //console.log(admCreate);

        const instructor = {
            name: "Instrutor Ensina Santos",
            password: "Instrutor123",
            email: "instrutor@mail.com",
            adm_id: admCreate.adm_id
        }


        const instructorCreate = await instructorCreateService.execute(instructor)
        //console.log(instructorCreate);

        instructorCreate.password = "update123"
        instructorCreate.name = "Update"

        const updateInstructor = await instructorUpdateService.execute(instructorCreate, admCreate.adm_id)
        //console.log(updateInstructor);

        expect(updateInstructor).toHaveProperty("name", "Update");

    })
})