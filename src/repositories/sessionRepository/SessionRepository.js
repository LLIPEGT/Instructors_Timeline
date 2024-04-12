const AppError = require("../../utils/AppError");
const authConfig = require("../../configs/auth");
const { sign } = require("jsonwebtoken");

const { compare } = require("bcryptjs");
const knex = require("../../database/knex");

class SessionRepository{
    async admCreate({email, password}){

        const adm = await knex("adm").where({email}).first()

        if(!adm){            
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }
        
        const passwordMatched = await compare(password, adm.password)
        console.log(password, " ", adm.password);
        if(!passwordMatched){
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        const {secret, expiresIn} = authConfig.jwt

        const token = sign({}, secret, {
            subject: String(adm.id),
            expiresIn
        })

        return {token, adm}
    }

    async instructorCreate({email, password}){

        const instructor = await knex("instructors").where({email}).first()

        if(!instructor){            
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }
        
        const passwordMatched = await compare(password, instructor.password)
        
        console.log(password, " ", instructor.password);
        if(!passwordMatched){
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        const {secret, expiresIn} = authConfig.jwt

        const token = sign({}, secret, {
            subject: String(instructor.id),
            expiresIn
        })

        return {token, instructor}
    }
}

module.exports = SessionRepository