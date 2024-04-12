
class InstructorListService{
    constructor(instructorRepository){
        this.instructorRepository = instructorRepository
    }
    async execute(){
        return await this.instructorRepository.listInstructor()
    
    }
  }
module.exports = InstructorListService