
import passport from 'passport';
import TwitterStrategy from '@superfaceai/passport-twitter-oauth2';
import envConfig from '../configs/env.config.js';
import userProps from '../utils/passport/userProps.util.js';
import findUserByIdOrCreate from '../services/findUserByIdOrCreate.service.js';
import serializeDeserialize from './serializeDeserialize.js';


/**
 * Passport strategy for Twitter OAuth 2.0
 */
passport.use(new TwitterStrategy.Strategy({
    clientType: 'confidential',
    clientID: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET,
    callbackURL: process.env.TWITTER_CLIENT_CALLBACK_URL
    },
    async function (accessToken, refreshToken, user, done) {
        const authedUser = await findUserByIdOrCreate(userProps(user));
        return done(null, authedUser);
    }
));


export default passport;