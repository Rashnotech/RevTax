/**
 * a function that return custom errors
 * @param {number} status 
 * @param {string} message
 * @returns an Error
 */

export const errorHandler = (status, message) => {
    const error = new Error();
    error.statusCode = status;
    error.message = message;
    return error;
}