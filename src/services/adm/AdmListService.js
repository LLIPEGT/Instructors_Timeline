class AdmListService{
    constructor(admRepository) {
        this.admRepository = admRepository
    }

    async execute(){
        const admList = await this.admRepository.list()
        return admList;
    }
}

module.exports = AdmListService