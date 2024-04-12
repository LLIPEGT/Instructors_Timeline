const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const ClassRepositoryInMemory = require("../../repositories/classRepository/ClassRepositoryInMemory")

const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const ClassCreateService = require("../../services/ClassServices/ClassCreateService")
const ClassListService = require("../../services/ClassServices/ClassListService")
const ClassDeleteService = require("../../services/ClassServices/ClassDeleteService")

describe("classDeleteService",  () => {

    let repository = null
    let classCreateService = null
    let classListService = null
    let classDeleteService = null

    let admRepository = null
    let admCreateService = null

    beforeEach(() => {
        admRepository = new AdmRepositoryInMemory()
        admCreateService = new AdmCreateService(admRepository)

        repository = new ClassRepositoryInMemory()
        classCreateService = new ClassCreateService(repository)
        classListService = new ClassListService(repository)
        classDeleteService = new ClassDeleteService(repository)
    })
    
    it("should be possible delete an class", async () => {
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

        const firstClass = await classCreateService.execute(class1)
        const secondClass = await classCreateService.execute(class2)

        const listClasses = await classListService.execute()
        //console.log(listClasses);

        const deleteClass = await classDeleteService.execute(firstClass)

        //console.log(listClasses);

        expect(deleteClass).not.toHaveProperty("name", deleteClass.name);
    })
})