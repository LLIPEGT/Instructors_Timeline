const SessionAdmRepository = require("../repositories/sessionRepository/SessionRepository");
const SessionAdmCreateService = require("../services/SessionServices/SessionAdmCreateService");
const SessionInstructorCreateService = require("../services/SessionServices/SessionInstructorCreateService");

const repository = new SessionAdmRepository()
const sessionAdmCreateService = new SessionAdmCreateService(repository)
const sessionInstructorCreateService = new SessionInstructorCreateService(repository)

class SessionCrontroller{
    async admCreate(req, res){
        const {email, password} = req.body;

        const token = await sessionAdmCreateService.execute({email, password})

        res.status(201).json(token)
    }

    async InstructorCreateService(req, res){
        const {email, password} = req.body;

        const token = await sessionInstructorCreateService.execute({email, password})

        res.status(201).json(token)
    }
}

module.exports = SessionCrontroller