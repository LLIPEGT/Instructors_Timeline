const { verify } = require("jsonwebtoken");
const AppError = require('../utils/AppError')
const authConfig = require('../configs/auth')


function ensureAuthenticatedInstructor(req, res, next){
    const authHeader = req.headers.authorization

    if(!authHeader){
        throw new AppError('JWT token não informado', 401)
    }
    const [, token] = authHeader.split(" ");

    try {
        const {sub: instructor_id} = verify(token, authConfig.jwt.secret)
        req.instructor = {
            id:Number(instructor_id)
        }
        next()
    } catch (error) {
        throw new AppError('JWT token invalido', 401)
    }
}

module.exports = ensureAuthenticatedInstructor;