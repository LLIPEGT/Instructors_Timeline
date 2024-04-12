const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const ClassRepositoryInMemory = require("../../repositories/classRepository/ClassRepositoryInMemory")

const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const ClassCreateService = require("../../services/ClassServices/ClassCreateService")
const ClassListService = require("../../services/ClassServices/ClassListService")

describe("classListService",  () => {

    let repository = null
    let classCreateService = null
    let classListService = null

    let admRepository = null
    let admCreateService = null

    beforeEach(() => {
        admRepository = new AdmRepositoryInMemory()
        admCreateService = new AdmCreateService(admRepository)

        repository = new ClassRepositoryInMemory()
        classCreateService = new ClassCreateService(repository)
        classListService = new ClassListService(repository)
    })
    
    it("class should be listed", async () => {
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
        const class2 = {
            name: "Informática",
            period: "Noite",
            adm_id: admCreate.adm_id
        }

        await classCreateService.execute(class1)
        await classCreateService.execute(class2)

        const listClasses = await classListService.execute()
        //console.log(listClasses);

        expect(listClasses).toEqual(expect.arrayContaining(listClasses));

    })
})