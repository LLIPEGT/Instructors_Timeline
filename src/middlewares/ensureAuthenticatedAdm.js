const { verify } = require("jsonwebtoken");
const AppError = require('../utils/AppError')
const authConfig = require('../configs/auth')


function ensureAuthenticatedAdm(req, res, next){
    const authHeader = req.headers.authorization

    if(!authHeader){
        throw new AppError('JWT token não informado', 401)
    }
    const [, token] = authHeader.split(" ");

    try {
        const {sub: adm_id} = verify(token, authConfig.jwt.secret)
        req.adm = {
            id:Number(adm_id)
        }
        next()
    } catch (error) {
        throw new AppError('JWT token invalido', 401)
    }
}

module.exports = ensureAuthenticatedAdm;