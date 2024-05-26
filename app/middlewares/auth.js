/* eslint-disable prefer-destructuring */
const { UnauthenticatedError } = require("../errors");
const { AuthMessages } = require("../utils/const/message");
const { isTokenValid } = require("../utils/jwt");

const authenticateUser = async (req, res, next) => {
    try {
        let token;
        // check header
        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith('Bearer')) {
            const header = authHeader.split(' ')
            token = header[1];
        }

        if (!token) {
            throw new UnauthenticatedError(AuthMessages.InvalidAuthentication);
        }

        const payload = isTokenValid({ token });

        req.user = {
            id: payload.id,
            userName: payload.userName,
            fullName: payload.fullName,
            email: payload.email,
            roleid: payload.roleid,
        };

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    authenticateUser
}