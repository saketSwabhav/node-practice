import {Router} from 'express';
import * as contact from './contact';
import * as validation from './validation'

const contactRouter = Router();


contactRouter.post('/testWebhook:id/valid:userId', authentication, validation.addFavValid, contact.addContact);
contactRouter.get('/', contact.getContact);



export default userRouter;