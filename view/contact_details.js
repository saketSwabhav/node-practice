import { v4 } from 'uuid'
const details = []

class ContactDetails{
    constructor(type,number){
        this.id = v4()
        this.type = type
        this.number = number
    }
    insert(){
        details.push(this)
    }
}
export default {ContactDetails,details}