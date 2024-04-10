const knex = require('../../database/knex')

class AdmRepository{
    async create({name, password, email, telefon}){
        const admId = await knex("adms").insert({name, email, password, telefon})

        return {id: admId}
    }

    async list(){
        const list = await knex("adms")

        return list
    }

    async listById({admId}){
        const listId = await knex("adms").where({id:admId})

        return listId
    }

    async update({admId ,password, email, telefon}){
        const update = await knes("adms").where({id: admId}).update({password, email, telefon})

        return update
    }

    async delete({admId}){
        return await knex("adms").where({admId}).delete()
    }
}
module.exports = AdmRepository