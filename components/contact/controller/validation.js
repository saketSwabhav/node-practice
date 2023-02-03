import v from '../../config/validationData';
import {Request, Response, NextFunction} from 'express';
import Joi from 'joi';
import {validatorFunc} from '../../helpers/utility.js';



export const addFavValid =async (req, res, next) => {
    try{

      const schema = Joi.object({
        username: Joi.string().trim().lowercase().min(v.USERNAME.MIN).max(v.USERNAME.MAX).alphanum()
      });

      const data = await validatorFunc(req.body, schema, res);      

      if(data.status === true){
        req.body = data.value;
        next();
      }

    }catch(e){
      console.log(e);
    }
}


