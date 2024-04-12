class AdmCreateService{
    constructor(AdmRepository){
        this.AdmRepository = AdmRepository
    }
    async execute({name, email, password, fone}){
        const admCreated = await this.AdmRepository.createAdm({name, password, email, fone})
        return admCreated
    }
  }
  
  module.exports = AdmCreateService