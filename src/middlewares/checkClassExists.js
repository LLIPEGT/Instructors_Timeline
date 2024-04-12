const knex = require("../database/knex");

async function checkClassExist(req,res,next) {
    const {class_id} = req.params
    const classRoom = await knex("class").where({id:class_id})
    

    if(classRoom.length === 0 ){
        return res.status(400).json("Aula não encontrado")
    }
    next()
}
module.exports = checkClassExist