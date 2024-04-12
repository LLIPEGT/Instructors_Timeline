class SessionInstructorCreateService{
    constructor(sessionRepository){
        this.sessionRepository = sessionRepository
    }
    async execute({email, password}){
        
        const sessionCreate = await this.sessionRepository.instructorCreate({email, password})
        return sessionCreate
    }
  }
  
  module.exports = SessionInstructorCreateService