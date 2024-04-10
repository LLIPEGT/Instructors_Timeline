class AdmListIdService{
    constructor(admRepository) {
        this.admRepository = admRepository
    }

    async execute({admId}){
        const admListId = await this.admRepository.listById({admId})
        return admListId;
    }
}

module.exports = AdmListIdService