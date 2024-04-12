

class ClassRepositoryInMemory{
    classes = []
    async createClass({name, period, adm_id}){
        const class1 = {
            class_id : Math.floor(Math.random() * 1000) + 1,
            name,
            period,
            adm_id
        }
        this.classes.push(class1)
        return class1
    }
    async listClass(){
        return this.classes
    }
    async listClassById({id}){
        const classRoom = this.classes.find(class1 => class1.id === id)
        return classRoom
    }
    async updateClass({id, name, period}){
        const classRoom = this.listClassById({id})

        classRoom.name = name ?? classRoom.name
        classRoom.period = period ?? classRoom.period

        return classRoom
    }
    async deleteClass({id}){
        const index = this.classes.findIndex(class1 => class1.id === id)
        return this.classes.slice(index, 1)
    }
}
module.exports = ClassRepositoryInMemory