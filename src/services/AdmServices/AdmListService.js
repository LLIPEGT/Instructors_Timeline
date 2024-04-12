
class AdmListService{
    constructor(admRepository){
        this.admRepository = admRepository
    }
    async execute(){
        return await this.admRepository.listAdm()
    
    }
  }
module.exports = AdmListService