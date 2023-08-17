

/**
 * Function that returs the selected props for the autenticated user
 * @param {Object} user - The autenticated user
 * @returns {Object} - The selected user props
 */
export default function userProps(user) {
    return {
        userId: user.id,
        username: user.displayName,
        userImage: user.photos[0].value,
        authProvider: user.provider
    };
};