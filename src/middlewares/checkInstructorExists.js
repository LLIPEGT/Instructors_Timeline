const knex = require("../database/knex");

async function checkInstructorExist(req,res,next) {
    const {instructor_id} = req.params
    const instructor = await knex("instructors").where({id:instructor_id})
    

    if(instructor.length === 0 ){
        return res.status(400).json("Instrutor não encontrado")
    }
    next()
}
module.exports = checkInstructorExist