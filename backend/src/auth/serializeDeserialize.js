
import passport from "passport";
import findUserById from '../services/findUserById.service.js';


/**
 * Function that serialize the autenticated user
 */
passport.serializeUser(function(user, done) {
    done(null, user.id);
});


/**
 * Function that deserialize the autenticated user
 */
passport.deserializeUser(async function(userId, done) {
    const authedUser = await findUserById(userId);
    done(null, authedUser);
});


export default passport;