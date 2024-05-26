const { StatusCodes } = require("http-status-codes");
const { login } = require("../../../services/mongoose/authServices");
const { sendSuccessResponse } = require("../../../utils/response");
const { AuthMessages } = require("../../../utils/const/message");

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

module.exports = { loginProcess };
