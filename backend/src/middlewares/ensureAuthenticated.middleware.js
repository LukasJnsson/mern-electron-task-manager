

/**
 * Function that validates if the request is authenticated
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Object} next - The next middleware function
 */
export default function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/api/v1/auth/failed');
    };
};