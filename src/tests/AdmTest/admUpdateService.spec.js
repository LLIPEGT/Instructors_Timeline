const AdmRepositoryInMemory = require("../../repositories/admRepository/AdmRepositoryInMemory")
const AdmCreateService = require("../../services/AdmServices/AdmCreateService")
const AdmUpdateService = require("../../services/AdmServices/AdmUpdateService")


describe('AdmUpdateService', ()=>{
    let repository = null
    let admCreateService = null
    let admUpdateService = null

    repository = new AdmRepositoryInMemory()
    admCreateService = new AdmCreateService(repository)
    admUpdateService = new AdmUpdateService(repository)

    it("user should be updated", async () => {
        const adm = {
            name : "Aluno Escola Estuda",
            password : "aluno1602",
            email : "aluno@mail",
            fone : "984919755"
        }

        const admCreated = await admCreateService.execute(adm)
        //console.log(admCreated);

        admCreated.name = "Aluno Update"
        admCreated.email = "update@mail.com"

        const updatedAdm = await admUpdateService.execute(admCreated)
        //console.log(updatedAdm);

        expect(updatedAdm).toHaveProperty("email", "update@mail.com");
    })
})