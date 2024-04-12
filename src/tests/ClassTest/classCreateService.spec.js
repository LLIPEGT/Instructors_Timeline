const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const ClassRepositoryInMemory = require("../../repositories/classRepository/ClassRepositoryInMemory")

const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const ClassCreateService = require("../../services/ClassServices/ClassCreateService")

describe("classCreateService",  () => {

    let repository = null
    let classCreateService = null

    let admRepository = null
    let admCreateService = null

    beforeEach(() => {
        admRepository = new AdmRepositoryInMemory()
        admCreateService = new AdmCreateService(admRepository)

        repository = new ClassRepositoryInMemory()
        classCreateService = new ClassCreateService(repository)
    })
    
    it("class should be created", async () => {
        const adm = {
            name : "Aluno Escola Estuda",
            password : "aluno1602",
            email : "aluno@mail",
            fone : "984919755"
        }
        const admCreate = await admCreateService.execute(adm)
        //console.log(admCreate);

        const class1 = {
            name: "Administrativo",
            period: "Manhã",
            adm_id: admCreate.adm_id
        }

        const classCreate = await classCreateService.execute(class1)
        //console.log(classCreate);

        expect(classCreate).toHaveProperty("adm_id", classCreate.adm_id);

    })
})