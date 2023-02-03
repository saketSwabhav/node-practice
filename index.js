import express from 'express'
import logger from './utils/logger.utils.js'
import { intializeApp } from './app.js'

// const res = require('express/lib/response')

const app = express();
const port = process.env.PORT || 8000;

intializeApp(app)

export default app

app.listen(port, () => {
    logger.info(`server is running at http://localhost:${port}`);
});
