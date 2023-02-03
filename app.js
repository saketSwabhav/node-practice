import {unguardedRoute,guardedRoute} from './components/index.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import authmiddleware from './middlewares/auth.middleware'


export function intializeApp(app) {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(morgan("tiny"));
  
  app.use("/api/v1", unguardedRoute);
  
  app.use(authmiddleware)//routes defined after this are guarded
  
  app.use("/api/v1", guardedRoute);
}

