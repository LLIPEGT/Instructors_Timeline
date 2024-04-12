class InstructorCreateService{
    constructor(instructorRepository){
        this.instructorRepository = instructorRepository
    }
    async execute({name, email, password, adm_id}){
        const instructorCreated = await this.instructorRepository.createInstructor({name, email, password, adm_id})
        return instructorCreated
    }
  }
  
  module.exports = InstructorCreateService