class ClassListByIdService{
    constructor(classRepository){
        this.classRepository = classRepository
    }
    async execute({class_id}){
        const classList = await this.classRepository.listClassById({class_id})
        return classList
    }
  }
  
  module.exports = ClassListByIdService