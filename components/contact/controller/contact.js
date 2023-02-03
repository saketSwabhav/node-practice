import {User,users} from "../../../view/user.js";


export const addUser = async(req, res, next ) =>{

    //joi - vlaidations

    try{
        // const {userId} = req.params;
        
        if(!Object.keys(req.body).length) {
            res.status(400).send("body cannot be empty")
        }
        let {fName,lName,isActive,contacts}= req.body
        new User(fName,lName,isActive,contacts).insert()
        console.log(users);
        res.status(200).send(users)

    }catch(e){
        console.error(e);
    }
}


export const getUsers = async(req, res, next ) =>{

    //joi - vlaidations

    try{

        console.log(users);
        res.status(200).send(users)

    }catch(e){
        console.error(e);
    }
}

export const updateUser = async(req, res, next ) =>{

    //joi - vlaidations

    try{

        console.log(users);
        res.status(200).send(users)

    }catch(e){
        console.error(e);
    }
}

export const deleteUser = async(req, res, next ) =>{

    //joi - vlaidations

    try{

        console.log(users);
        res.status(200).send(users)

    }catch(e){
        console.error(e);
    }
}