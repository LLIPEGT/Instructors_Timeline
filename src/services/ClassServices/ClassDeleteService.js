class ClassDeleteService{
    constructor(classRepository){
        this.classRepository = classRepository
    }
    async execute({class_id}){
        const classDelete = await this.classRepository.deleteClass({class_id})
        return classDelete
    }
  }
  
  module.exports = ClassDeleteService