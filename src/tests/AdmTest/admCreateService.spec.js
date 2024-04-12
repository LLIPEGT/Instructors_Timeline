const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const AdmCreateService = require("../../services/AdmServices/AdmCreateService")


describe('AdmCreateService', ()=>{
    let repository = null
    let admCreateService = null

    repository = new AdmRepositoryInMemory()
    admCreateService = new AdmCreateService(repository)

    it("Adm should be created", async () => {
        const adm = {
            name : "Aluno Escola Estuda",
            password : "aluno1602",
            email : "aluno@mail",
            fone : "984919755"
        }

        const admCreated = await admCreateService.execute(adm)
        //console.log(admCreated);

        expect(admCreated).toHaveProperty("adm_id");
    })
})