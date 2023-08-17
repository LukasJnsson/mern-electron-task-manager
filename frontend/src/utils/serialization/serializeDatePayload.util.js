

/**
 * Function that serialize the date payload
 * @param {Object} date - The dayjs date object
 * @returns {Object} - The date
 */
export const serializeDatePayload = date => {
    return {
        day: date.$D,
        month: date.$M,
        year: date.$y
    };
};


export default serializeDatePayload;