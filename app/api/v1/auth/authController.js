const { StatusCodes } = require("http-status-codes");
const { login } = require("../../../services/mongoose/authServices");

const loginProcess = async (req, res, next) => {
    try {
        const result = await login(req);

        res.status(StatusCodes.CREATED).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { loginProcess };
