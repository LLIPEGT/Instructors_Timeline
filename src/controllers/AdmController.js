const AdmRepository = require("../repositories/admRepository/AdmRepository")
const AdmCreateService = require("../services/AdmServices/AdmCreateService")
const AdmDeleteService = require("../services/AdmServices/AdmDeleteService")
const AdmListByIdService = require("../services/AdmServices/AdmListByIdService")
const AdmListService = require("../services/AdmServices/AdmListService")
const AdmUpdateService = require("../services/AdmServices/AdmUpdateService")

const knex = require("../database/knex")

const admRepository = new AdmRepository()
const admCreateService = new AdmCreateService(admRepository)
const admListService = new AdmListService(admRepository)
const admListByIdService = new AdmListByIdService(admRepository)
const admUpdateService = new AdmUpdateService(admRepository)
const admDeleteService = new AdmDeleteService(admRepository)

class AdmController{
    async createAdm(req,res){
        const {name, email, password, fone} = req.body
        
        await admCreateService.execute({name, email, password, fone})

        return res.status(201).json("Usuário cadastrado com sucesso")
    }

    async listAdm(req,res){
       const adm = await admListService.execute()
       return res.status(200).json(adm)
    }

    async listAdmById(req,res){
        const {adm_id} = req.params

        const adm = await admListByIdService.execute({adm_id})

        return res.status(200).json(adm)
    }

    async updateAdm(req,res){
        const {adm_id} = req.params
        const {name, email, password, fone} = req.body

        await admUpdateService.execute({name, email, password, fone, adm_id})

        return res.status(200).json("Usuário atualizado com sucesso!")
    }
    

    async deleteAdm(req,res){
    const {adm_id} = req.params
    
    await admDeleteService.execute({adm_id})

        return res.status(200).json("Registro deletado com sucesso!")
    }

}
module.exports = AdmController