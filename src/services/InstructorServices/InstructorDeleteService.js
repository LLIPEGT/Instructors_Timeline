class InstructorDeleteService{
    constructor(instructorRepository){
        this.instructorRepository = instructorRepository
    }
    async execute({instructor_id}){
        const instructorDelete = await this.instructorRepository.deleteInstructor({instructor_id})
        return instructorDelete
    }
  }
  
  module.exports = InstructorDeleteService