const knex = require("../database/knex");

async function checkEventExist(req,res,next) {
    const {event_id} = req.params
    const event = await knex("events").where({id:event_id})
    

    if(event.length === 0 ){
        return res.status(400).json("Evento não encontrado")
    }
    next()
}
module.exports = checkEventExist