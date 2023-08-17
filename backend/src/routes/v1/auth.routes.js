
import express from "express";
const router = express.Router();
import envConfig from '../../configs/env.config.js';
import passportGoogle from '../../auth/google.auth.js';
import passportTwitter from "../../auth/twitter.auth.js";
import passportGitHub from '../../auth/github.auth.js';
import { authSucceededHandler,
         authFailedHandler,
         authSignoutHandler
} from "../../controllers/authentication.controller.js";


/**
 * Google
 */
router.get('/google', passportGoogle.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', passportGoogle.authenticate('google', {
    failureRedirect: process.env.CLIENT_AUTH_FAILED,
    successRedirect: process.env.CLIENT_AUTH_SUCCEEDED,
}));


/**
 * Twitter
 */
router.get('/twitter', passportTwitter.authenticate('twitter', { scope: ['tweet.read', 'tweet.write', 'users.read'] }));

router.get('/twitter/callback', passportTwitter.authenticate('twitter', {
    failureRedirect: process.env.CLIENT_AUTH_FAILED,
    successRedirect: process.env.CLIENT_AUTH_SUCCEEDED,
}));


/**
 * GitHub
 */
router.get('/github', passportGitHub.authenticate('github', { scope: ['User.Read', 'profile'] }));

router.get('/github/callback', passportGitHub.authenticate('github', {
    failureRedirect: process.env.CLIENT_AUTH_FAILED,
    successRedirect: process.env.CLIENT_AUTH_SUCCEEDED,
}));


/**
 * Auth success
 */
router.get('/success', authSucceededHandler);


/**
 * Auth failed
 */
router.get('/failed', authFailedHandler);


/**
 * Sign out
 */
router.get('/signout', authSignoutHandler);


export default router;