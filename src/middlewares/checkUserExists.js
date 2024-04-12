const knex = require("../database/knex");

async function checkUserExists(req,res,next) {
    const {user_id} = req.params
    const user = await knex("users").where({id:user_id})

    if(user.length === 0 ){
        return res.status(400).json("Usuário não encontrado")
    }
    next()
}
module.exports = checkUserExists