const knex = require("../../database/knex")

class ClassRepository{
    async createClass({name, period, adm_id}){
        const class_id = await knex("class").insert({name, period, adm_id})
        return {id: class_id}
    }
    async listClass(){
        const classRoom = await knex("class")
        return classRoom
    }
    async listClassById({class_id}){
        const classRoom = await knex("class").where({id: class_id})
        return classRoom
    }
    async updateClass({class_id, name, period}){
        const classRoom = await knex("class").where({id: class_id})

        classRoom.name = name ?? classRoom.name
        classRoom.period = period ?? classRoom.period

        await knex("class").where({id: class_id}).update({name: classRoom.name,period: classRoom.period})

        return classRoom
    }
    async deleteClass({class_id}){
        const classRoom = await knex("class").where({id: class_id}).delete()
        return classRoom
    }
}
module.exports = ClassRepository