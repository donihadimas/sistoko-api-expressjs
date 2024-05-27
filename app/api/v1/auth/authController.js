const { StatusCodes } = require("http-status-codes");
const { login } = require("../../../services/mongoose/authServices");
const { sendSuccessResponse } = require("../../../utils/response");
const { AuthMessages } = require("../../../utils/const/message");
const { createUsers } = require("../../../services/mongoose/usersServices");

const loginProcess = async (req, res, next) => {
    try {
        const result = await login(req);

        sendSuccessResponse(
            res, {
            message: AuthMessages.SuccessLogin,
            statusCode: StatusCodes.OK,
            data: result
        }
        )
    } catch (err) {
        next(err);
    }
};

const registerProcess = async (req, res, next) => {
    try {
        const result = await createUsers(req);

        sendSuccessResponse(res, {
            message: AuthMessages.SuccessRegister,
            statusCode: StatusCodes.CREATED,
            data: result,
        });
    } catch (error) {
        next(error)
    }
}

module.exports = { loginProcess, registerProcess };
