const { StatusCodes } = require("http-status-codes");

const sendSuccessResponse = (res, { message, statusCode, data }) => {
    res.status(statusCode || StatusCodes.OK).json({
        success: true,
        statusCode: statusCode || StatusCodes.OK,
        message: message || 'Success',
        ...(data.totalData !== undefined && { totalData: data.totalData }),
        ...(data.page !== undefined && { page: data.page }),
        ...(data.pageSize !== undefined && { pageSize: data.pageSize }),
        ...(data.data !== undefined ? { data: data.data || [] } : { data: data || null }),
    });
};

const sendErrorResponse = (res, { message, statusCode }) => {
    res.status(statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        statusCode: statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message: message || 'Internal Server Error',
    });
};

module.exports = {
    sendSuccessResponse,
    sendErrorResponse
}