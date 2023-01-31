import {getBalance} from '../../helper/utility';


export const addContact = async(req, res, next ) =>{

    //joi - vlaidations

    try{

        const {userId} = req.params;
        
        if(!Object.keys(req.body).length) {
            resp.status(400).send("body cannot be empty")
        }
        let {fName,lName,isActive,contacts}= req.body
        new User.User(fName,lName,isActive,contacts).insert()
        console.log(User.users);
        resp.status(200).send()

    }catch(e){

    }
}


export const getContact = async(req, res, next ) =>{

    //joi - vlaidations

    try{


        const bal = await getBalance();

        
        if(!Object.keys(req.body).length) {
            resp.status(400).send("body cannot be empty")
        }
        let {fName,lName,isActive,contacts}= req.body
        new User.User(fName,lName,isActive,contacts).insert()
        console.log(User.users);
        resp.status(200).send()

    }catch(e){

    }
}