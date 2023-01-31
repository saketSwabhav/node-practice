const uuid = require('uuid')
const users = []

class User{
    constructor(fName,lName,isActive,contacts){
        this.id = uuid.v4()
        this.fName = fName
        this.lName = lName
        this.isAdmin = true
        this.isActive = isActive
        this.contacts = contacts
    }
    insert(){
        users.push(this)
    }
}
module.exports = {User,users}