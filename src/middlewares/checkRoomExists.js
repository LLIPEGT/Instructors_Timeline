const knex = require("../database/knex");

async function checkRoomExist(req,res,next) {
    const {room_id} = req.params
    const room = await knex("rooms").where({id:room_id})
    

    if(room.length === 0 ){
        return res.status(400).json("Sala não encontrado")
    }
    next()
}
module.exports = checkRoomExist