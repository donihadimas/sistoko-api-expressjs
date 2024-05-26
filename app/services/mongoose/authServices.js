const { UnauthorizedError } = require('../../errors');
const UsersModel = require('../../api/v1/users/usersModel');
const { createJWT } = require('../../utils/jwt');
const { createTokenUser } = require('../../utils/token');
const BadRequest = require('../../errors/bad-request');
const { AuthMessages } = require('../../utils/const/message');
const login = async (req) => {
    const { userName, password } = req.body;

    if (!userName || !password) {
        throw new BadRequest(AuthMessages.PleaseFillEmailPassword);
    }

    const result = await UsersModel.findOne({ userName });

    if (!result) {
        throw new UnauthorizedError(AuthMessages.InvalidCredential);
    }
    const isPasswordCorrect = await result.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new UnauthorizedError(AuthMessages.InvalidCredential);
    }
    const jwtToken = createJWT({ payload: createTokenUser(result) });

    return { token: jwtToken };
};

module.exports = { login };
