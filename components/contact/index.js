import Router from 'express';
import * as contact from './controller/contact.js';
// import * as validation from './validation'

const contactRouter = Router();
// indexRoute.use(contactRouter)

// contactRouter.post('/user', authentication, validation.addFavValid, contact.addContact);
contactRouter.post('/user', contact.addUser);
contactRouter.get('/user', contact.getUsers);
contactRouter.put('/user:userID', contact.getUsers);
contactRouter.delete('/user:userID', contact.getUsers);

export default contactRouter;