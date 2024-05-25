const { BadRequestError, UnauthorizedError } = require('../../errors');
const UsersModel = require('../../api/v1/users/usersModel');
const { createJWT } = require('../../utils/jwt');
const { createTokenUser } = require('../../utils/token');
const login = async (req) => {
    const { userName, password } = req.body;

    if (!userName || !password) {
        throw new BadRequestError('Please provide email and password');
    }

    const result = await UsersModel.findOne({ userName });

    if (!result) {
        throw new UnauthorizedError('Kredensial Tidak Valid');
    }
    const isPasswordCorrect = await result.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new UnauthorizedError('Kredensial Tidak Valid');
    }
    const jwtToken = createJWT({ payload: createTokenUser(result) });

    return { jwtToken, roleId: result.roleId, userName: result.userName };
};

module.exports = { login };
