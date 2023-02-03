import Router from 'express';
// import * as validation from './validation'

const contactRouter = Router();
// indexRoute.use(contactRouter)

// contactRouter.post('/user', authentication, validation.addFavValid, contact.addContact);
contactRouter.post('/details', contact.addContact);
contactRouter.get('/details', contact.getContact);
contactRouter.put('/details:contactID', contact.getContact);
contactRouter.delete('/details:contactID', contact.getContact);

export default contactRouter;