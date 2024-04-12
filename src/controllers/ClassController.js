const knex = require("../database/knex")
const ClassRepository = require("../repositories/classRepository/ClassRepository")
const ClassCreateService = require("../services/ClassServices/ClassCreateService")
const ClassDeleteService = require("../services/ClassServices/ClassDeleteService")
const ClassListByIdService = require("../services/ClassServices/ClassListByIdService")
const ClassListService = require("../services/ClassServices/ClassListService")
const ClassUpdateService = require("../services/ClassServices/ClassUpdateService")

const classRepository = new ClassRepository()
const classCreateService = new ClassCreateService(classRepository)
const classListService = new ClassListService(classRepository)
const classListByIdService = new ClassListByIdService(classRepository)
const classUpdateService = new ClassUpdateService(classRepository)
const classDeleteService = new ClassDeleteService(classRepository)

class ClassController{
    async createClass(req,res){
        const {adm_id} = req.params
        const {name, period} = req.body
        
        await classCreateService.execute({name, period, adm_id})

        return res.status(201).json("Classe cadastrada com sucesso")
    }

    async listClass(req,res){
       const classRoom = await classListService.execute()
       return res.status(200).json(classRoom)
    }

    async listClassById(req,res){
        const {class_id} = req.params

        const classRoom = await classListByIdService.execute({class_id})

        return res.status(200).json(classRoom)
    }

    async updateClass(req,res){
        const {class_id} = req.params
        const {name, period} = req.body

        await classUpdateService.execute({name, period, class_id})

        return res.status(200).json("Classe atualizada com sucesso!")
    }

    async deleteClass(req,res){
    const {class_id} = req.params
    
    await classDeleteService.execute({class_id})

        return res.status(200).json("Registro deletado com sucesso!")
    }

}
module.exports = ClassController