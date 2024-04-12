class InstructorListByIdService{
    constructor(instructorRepository){
        this.instructorRepository = instructorRepository
    }
    async execute({instructor_id}){
        const instructor = await this.instructorRepository.listInstructorById({instructor_id})
        return instructor
    }
  }
  
  module.exports = InstructorListByIdService