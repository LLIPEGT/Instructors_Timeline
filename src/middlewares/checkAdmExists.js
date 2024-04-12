const knex = require("../database/knex");

async function checkAdmExist(req,res,next) {
    const {adm_id} = req.params
    const adm = await knex("adm").where({id:adm_id})
    

    if(adm.length === 0 ){
        return res.status(400).json("Admin não encontrado")
    }
    next()
}
module.exports = checkAdmExist