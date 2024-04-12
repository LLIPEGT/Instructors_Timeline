const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const AdmListService = require("../../services/AdmServices/AdmListService")
const AdmDeleteService = require("../../services/AdmServices/AdmDeleteService")

describe('AdmDeleteService', ()=>{
    let repository = null
    let admCreateService = null
    let admDeleteService = null
    let admListService = null

    repository = new AdmRepositoryInMemory()
    admCreateService = new AdmCreateService(repository)
    admDeleteService = new AdmDeleteService(repository)
    admListService = new AdmListService(repository)

    it("should be possible delete an admin", async () => {
        const adm = {
            name : "Aluno Escola Estuda",
            password : "aluno1602",
            email : "aluno@mail",
            fone : "984919755"
        }
        const adm2 = {
            name : "Aluno2 Escola Estuda",
            password : "aluno1602",
            email : "aluno2@mail",
            fone : "984919755"
        }

        const firstAdm = await admCreateService.execute(adm)
        const secondAdm = await admCreateService.execute(adm2)

        const listAdms = await admListService.execute()

        //console.log(listAdms);

        const deleteAdm = await admDeleteService.execute(firstAdm)

        //console.log(listAdms);

        expect(deleteAdm).not.toHaveProperty("email", "aluno@mail.com");
    })
})