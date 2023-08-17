

/**
 * Function that serialize the tab payload
 * @param {Number} tab - The selected tab 
 * @param {Object} date - The dayjs date object
 * @returns {Object} - The selected tab and date
 */
export const serializeTabPayload = (tab, date) => {
    return {
        selectedTab: tab,
        day: date.$D,
        month: date.$M,
        year: date.$y
    };
};


export default serializeTabPayload;