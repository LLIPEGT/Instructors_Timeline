const knex = require("../../database/knex")
const { hash } = require("bcryptjs")

class InstructorRepository {
    async createInstructor({name, email, password, adm_id}) {

        const hashedPassword = await hash(password, 8);

        const instructor_id = await knex("instructors").insert({name, email, password: hashedPassword, adm_id})

        return {id: instructor_id}
    }

    async listInstructor(){
        const instructor = await knex("instructors")
        return instructor
    }

    async listInstructorById({instructor_id}){

        const instructor = await knex("instructors").where({id: instructor_id})
        return instructor
    }

    async updateInstructor({instructor_id, name, email, password}){
        const instructor = await knex("instructors").where({id: instructor_id})

        instructor.name = name ?? instructor.name
        instructor.email = email ?? instructor.email
        instructor.password = password ?? instructor.password

        await knex("instructors").where({id: instructor_id}).update({name: instructor.name,email: instructor.email,password: instructor.password})

        return instructor
    }

    async deleteInstructor({instructor_id}){
        const instructor = await knex("instructors").where({id: instructor_id}).delete()
        return instructor
    }
}

module.exports = InstructorRepository