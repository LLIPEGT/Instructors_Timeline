class AdmListByIdService{
    constructor(admRepository){
        this.admRepository = admRepository
    }
    async execute({adm_id}){
        const adm = await this.admRepository.listAdmById({adm_id})
        return adm
    }
  }
  
  module.exports = AdmListByIdService