const InstructorRepository = require("../repositories/instructorRepository/InstructorRepository")
const InstructorCreateService = require("../services/InstructorServices/InstructorCreateService")
const InstructorDeleteService = require("../services/InstructorServices/InstructorDeleteService")
const InstructorListByIdService = require("../services/InstructorServices/InstructorListByIdService")
const InstructorListService = require("../services/InstructorServices/InstructorListService")
const InstructorUpdateService = require("../services/InstructorServices/InstructorUpdateService")

const instructorRepository = new InstructorRepository()
const instructorCreateService = new InstructorCreateService(instructorRepository)
const instructorListService = new InstructorListService(instructorRepository)
const instructorListByIdService = new InstructorListByIdService(instructorRepository)
const instructorUpdateService = new InstructorUpdateService(instructorRepository)
const instructorDeleteService = new InstructorDeleteService(instructorRepository)

class IdnstructorController{
    async createInstructor(req,res){
        const {adm_id} = req.params
        const {name, email, password} = req.body
        
        await instructorCreateService.execute({name, email, password, adm_id})

        return res.status(201).json("Instrutor cadastrado com sucesso")
    }

    async listInstructor(req,res){
       const instructor = await instructorListService.execute()
       return res.status(200).json(instructor)
    }

    async listInstructorById(req,res){
        const {instructor_id} = req.params

        const instructor = await instructorListByIdService.execute({instructor_id})

        return res.status(200).json(instructor)
    }

    async updateInstructor(req,res){
        const {instructor_id} = req.params
        const {name, email, password} = req.body

        await instructorUpdateService.execute({name, email, password, instructor_id})

        return res.status(200).json("Instrutor atualizado com sucesso!")
    }

    async deleteInstructor(req,res){
    const {instructor_id} = req.params
    
    await instructorDeleteService.execute({instructor_id})

        return res.status(200).json("Registro deletado com sucesso!")
    }

}
module.exports = IdnstructorController