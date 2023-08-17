

/**
 * Function that handle errors
 * @param {Object} err - The error object
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Object} next - The next middleware function
 */
export default function errorMiddleware(err, req, res, next) {
    const error = {
        status: err.statusCode ?? 500,
        name: err.name ?? 'Error',
        message: err.message
    };
    const jsonifiedError = JSON.stringify({ error }, null, 2);

    res.set('Content-Type', 'application/json');
    res.status(error.status).send(jsonifiedError);
};