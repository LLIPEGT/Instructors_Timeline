class AdmDeleteService{
    constructor(admRepository){
        this.admRepository = admRepository
    }
    async execute({adm_id}){
        const admDelete = await this.admRepository.deleteAdm({adm_id})
        return admDelete
    }
  }
  
  module.exports = AdmDeleteService