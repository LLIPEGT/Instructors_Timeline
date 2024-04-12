class AdmRepositoryInMemory{
    adms = []
    async createAdm({name, password, email, fone}){
        const adm = {
            adm_id: Math.floor(Math.random() * 1000) + 1,
            name,
            password,
            email,
            fone
        }
        this.adms.push(adm)
        return adm
    }
    async listAdm(){
        return this.adms
    }
    async listAdmById({id}){
        const adm = this.adms.find(adm => adm.id === id)
        return adm
    }
    async updateAdm({name, email, password, fone, id}){
        const adm = this.listAdmById({id})
    
        adm.email = email ?? adm.email
        adm.name = name ?? adm.name
        adm.password = password ?? adm.password
        adm.fone = fone ?? adm.fone
        return adm
    }
    async deleteAdm({id}){
        const index = this.adms.findIndex(adm => adm.id === id)
        return this.adms.splice(index, 1)
    }
    }
    
    module.exports = AdmRepositoryInMemory