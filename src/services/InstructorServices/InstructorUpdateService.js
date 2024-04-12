class InstructorUpdateService{
    constructor(instructorRepository){
        this.instructorRepository = instructorRepository
    }
    async execute({instructor_id, name, password, email, fone}){
        const instructorUpdated = await this.instructorRepository.updateInstructor({instructor_id, name, password, email, fone})
        return instructorUpdated
    }
  }
  
  module.exports = InstructorUpdateService