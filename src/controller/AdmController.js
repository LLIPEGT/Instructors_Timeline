
const knex = require("../database/knex")
const AdmRepository = require("../repositories/admRepository/AdmRepository")
const AdmCreateService = require("../services/adm/AdmCreateService");
const AdmListIdService = require("../services/adm/AdmListIdService");
const AdmListService = require("../services/adm/AdmListService");

const admRepository = new AdmRepository();
const admCreateService = new AdmCreateService(admRepository)
const admListService = new AdmListService(admRepository)
const admListIdService = new AdmListIdService(admRepository)

class AdmController{
    async create(req, res){
        const {name, password, email, telefon} = req.body
        
        await admCreateService.execute({name, password, email, telefon})

        return res.status(201).json("Admin successfully registered!")
    }

    async list(req, res){
        const list = await admListService.execute()

        return res.status(201).json(list)
    }

    async listId(req, res){
        const {admId} = req.params
        const listId = await admListIdService.execute({admId})

        return res.status(201).json(listId)
    }
}

module.exports = AdmController