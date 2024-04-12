class SessionAdmCreateService{
    constructor(sessionRepository){
        this.sessionRepository = sessionRepository
    }
    async execute({email, password}){
        
        const sessionCreate = await this.sessionRepository.admCreate({email, password})

        return sessionCreate
    }
  }
  
  module.exports = SessionAdmCreateService