class AdmCreateService{
    constructor(admRepository) {
        this.admRepository = admRepository
    }

    async execute({name, password, email, telefon}){
        const admCreated = await this.admRepository.create({name, password, email, telefon})
        return admCreated;
    }
}

module.exports = AdmCreateService