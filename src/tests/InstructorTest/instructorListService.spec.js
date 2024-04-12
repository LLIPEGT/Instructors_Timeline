
const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const InstructorRepositoryInMemory = require("../../repositories/instructorRepository/InstructorRepositoryInMemory")

const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const InstructorCreateService = require("../../services/InstructorServices/InstructorCreateService")
const InstructorListService = require("../../services/InstructorServices/InstructorListService")

describe("instructorListService",  () => {

    let repository = null
    let instructorCreateService = null
    let instructorListService = null

    let admRepository = null
    let admCreateService = null

    beforeEach(() => {
        admRepository = new AdmRepositoryInMemory()
        admCreateService = new AdmCreateService(admRepository)

        repository = new InstructorRepositoryInMemory()
        instructorCreateService = new InstructorCreateService(repository)
        instructorListService = new InstructorListService(repository)
    })
    
    it("should be able to list Instructor", async () => {
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
        const instructor2 = {
            name: "Instrutor2 Ensina Santos",
            password: "Instrutor123",
            email: "instrutor2@mail.com",
            fone: "99958463",
            adm_id: admCreate.adm_id
        }

        await instructorCreateService.execute(instructor)
        await instructorCreateService.execute(instructor)
        //console.log(instructorCreate);

        const listInstructor = await instructorListService.execute()

        //console.log(listInstructor);

        expect(listInstructor).toEqual(expect.arrayContaining(listInstructor));

    })
})