const knex = require("../../database/knex")
const { hash } = require("bcryptjs");

class AdmRepository {
    async createAdm({name, email, password, fone}) {

        const hashedPassword = await hash(password, 8);
        
        const admId = await knex("adm").insert({name, email, password: hashedPassword, fone})
        return {id: admId}
    }

    async listAdm(){
        const adm = await knex("adm")
        return adm
    }

    async listAdmById({adm_id}){

        const adm = await knex("adm").where({id: adm_id})
        return adm
    }

    async updateAdm({adm_id, name, email, password, fone}){
        const adm = await knex("adm").where({id: adm_id})

        adm.name = name ?? adm.name
        adm.email = email ?? adm.email
        adm.password = password ?? adm.password
        adm.fone = fone ?? adm.fone

        await knex("adm").where({id: adm_id}).update({name: adm.name,email: adm.email,password: adm.password, fone: adm.fone})

        return adm
    }

    async deleteAdm({adm_id}){
        const adm = await knex("adm").where({id: adm_id}).delete()
        return adm
    }
}

module.exports = AdmRepository