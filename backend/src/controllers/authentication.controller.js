

/**
 * Function that handles a failed authentication
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export function authFailedHandler(req, res) {
    res.status(401).json({ authenticated: false });
};


/**
 * Function that handles a succeeded authentication
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export function authSucceededHandler(req, res) {
    if (req.user) {
        res.status(200).json({ 
            authenticated: true, 
            authenticatedUser: req.user
        });
    } else {
        res.status(401).json({ authenticated: false });
    };
};


/**
 * Function that handles the signout by breaking the authentication
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Object} next - The next middleware function
 */
export function authSignoutHandler(req, res, next) {
    req.logout(function(err) {
        if (err) { 
            return next(err);
        };
        res.status(200).json({ authenticated: false });
    });
};