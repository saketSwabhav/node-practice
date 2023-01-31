import {Router} from "express";
import contactRoute from "./contact/controller/index";
 
const indexRoute = Router(); 
 
indexRoute.use("/contact", contactRoute); 


export default indexRoute;