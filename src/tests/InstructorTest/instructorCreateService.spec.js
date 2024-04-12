const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const InstructorRepositoryInMemory = require("../../repositories/instructorRepository/InstructorRepositoryInMemory")

const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const InstructorCreateService = require("../../services/InstructorServices/InstructorCreateService")

describe("instructorCreateService",  () => {

    let repository = null
    let instructorCreateService = null

    let admRepository = null
    let admCreateService = null

    beforeEach(() => {
        admRepository = new AdmRepositoryInMemory()
        admCreateService = new AdmCreateService(admRepository)

        repository = new InstructorRepositoryInMemory()
        instructorCreateService = new InstructorCreateService(repository)
    })
    
    it("Instructor should be created", async () => {
        const adm = {
            name : "Aluno Escola Estuda",
            password : "aluno1602",
            email : "aluno@mail",
            fone : "984919755"
        }
        const admCreate = await admCreateService.execute(adm)
        //console.log(admCreate);

        const instructor = {
            name: "Instrutor Ensina Santos",
            password: "Instrutor123",
            email: "instrutor@mail.com",
            fone: "99958463",
            adm_id: admCreate.adm_id
        }

        const instructorCreate = await instructorCreateService.execute(instructor)
        //console.log(instructorCreate);

        expect(instructorCreate).toHaveProperty("adm_id", instructorCreate.adm_id);

    })
})