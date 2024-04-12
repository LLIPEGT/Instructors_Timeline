class ClassCreateService{
    constructor(classRepository){
        this.classRepository = classRepository
    }
    async execute({name, period, adm_id}){
        const classCreated = await this.classRepository.createClass({name, period, adm_id})
        return classCreated
    }
  }
  
  module.exports = ClassCreateService