
import dotenv from 'dotenv';
import express from "express";
import { expressLogger } from 'express-loggerr';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import ejs from 'ejs';
import bodyParser from "body-parser";
import envConfig from './src/configs/env.config.js';
import { getPublic, getViews } from './src/configs/path.config.js';
import V1routes from './src/routes/v1/routes.js';
import errorMiddleware from './src/middlewares/error.middleware.js';


const PORT = process.env.PORT;

const app = express();
app.use(cors({ 
    origin: 'http://127.0.0.1:3000',
    credentials: true
 }));
app.use(expressLogger('Dev'));
app.use(express.static(getPublic));
app.set('view engine', 'ejs');
app.set('views', getViews);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1', V1routes);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


export default app;