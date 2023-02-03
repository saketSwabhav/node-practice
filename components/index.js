import {Router} from "express";
import contactRoute from "./contact/index.js";
 
export const unguardedRoute = Router(); 
// export const guardedRoute = Router(); 
 
unguardedRoute.use("/contact", contactRoute); 
