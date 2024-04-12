const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const AdmListService = require("../../services/AdmServices/AdmListService")


describe('AdmDeleteService', ()=>{
    let repository = null
    let admCreateService = null
    let admListService = null

    repository = new AdmRepositoryInMemory()
    admCreateService = new AdmCreateService(repository)
    admListService = new AdmListService(repository)

    it("Admin should be listed", async () => {
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

        await admCreateService.execute(adm)
        await admCreateService.execute(adm2)

        const listAdms = await admListService.execute()

        //console.log(listAdms);

        expect(listAdms).toEqual(expect.arrayContaining(listAdms));
    })
})