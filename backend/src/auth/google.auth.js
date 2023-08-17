
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import envConfig from '../configs/env.config.js';
import userProps from '../utils/passport/userProps.util.js';
import findUserByIdOrCreate from '../services/findUserByIdOrCreate.service.js';
import serializeDeserialize from './serializeDeserialize.js';


/**
 * Passport strategy for Google OAuth 2.0
 */
passport.use(new GoogleStrategy.Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CLIENT_CALLBACK_URL
    },
    async function (accessToken, refreshToken, user, done) {
        const authedUser = await findUserByIdOrCreate(userProps(user));
        return done(null, authedUser);
    }
));


export default passport;