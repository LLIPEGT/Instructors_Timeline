class ClassListService{
    constructor(classRepository){
        this.classRepository = classRepository
    }
    async execute(){
        return await this.classRepository.listClass()
    
    }
  }
module.exports = ClassListService