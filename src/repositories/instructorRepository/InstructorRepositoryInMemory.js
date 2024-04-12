class InstructorRepositoryInMemory{
    instructors = []
    async createInstructor({name, password, email, fone, adm_id}){
        const instructor = {
            instructor_id: Math.floor(Math.random() * 1000) + 1,
            name,
            password,
            email, 
            adm_id
        }
        this.instructors.push(instructor)
        return instructor
    }
    async listInstructor(){
        return this.instructors
    }
    async listInstructorById({id}){
        const instructor = this.instructors.find(instructor => instructor.id === id)
        return instructor
    }
    async updateInstructor({id, name, password, email}){
        const instructor = this.listInstructorById({id})
    
        instructor.name = name ?? instructor.name
        instructor.password = password ?? instructor.password
        instructor.email = email ?? instructor.email

        return instructor
    }
    async deleteInstructor({id}){
        const index = this.instructors.findIndex(instructor => instructor.id === id)
        return this.instructors.splice(index, 1)
    }
    }
    
    module.exports = InstructorRepositoryInMemory