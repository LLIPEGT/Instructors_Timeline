class ClassUpdateService{
    constructor(classRepository){
        this.classRepository = classRepository
    }
    async execute({class_id, name, period}){
        const classUpdated = await this.classRepository.updateClass({class_id, name, period})
        return classUpdated
    }
  }
  
  module.exports = ClassUpdateService