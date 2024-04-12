class AdmUpdateService{
    constructor(admRepository){
        this.admRepository = admRepository
    }
    async execute({adm_id, name, email, password, fone}){
        const admUpdated = await this.admRepository.updateAdm({adm_id, name, email, password, fone})
        return admUpdated
    }
  }
  
  module.exports = AdmUpdateService