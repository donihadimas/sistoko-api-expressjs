const { StatusCodes } = require('http-status-codes');
const { getAllProduct, createProduct, getOneProduct, updateProduct, deleteProduct } = require('../../../../services/mongoose/productServices');
const { GeneralMessages } = require('../../../../utils/const/message');
const { sendSuccessResponse } = require('../../../../utils/response');

const index = async (req, res, next) => {
    try {
        const result = await getAllProduct(req);

        sendSuccessResponse(res, {
            message: GeneralMessages.SuccessDisplayData,
            statusCode: StatusCodes.OK,
            data: result,
        });
    } catch (error) {
        next(error)
    }
}

const find = async (req, res, next) => {
    try {
        const result = await getOneProduct(req)

        sendSuccessResponse(res, {
            message: GeneralMessages.SuccessDisplayData,
            statusCode: StatusCodes.OK,
            data: result,
        });
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const result = await createProduct(req);

        sendSuccessResponse(res, {
            message: GeneralMessages.SuccessCreateData,
            statusCode: StatusCodes.CREATED,
            data: result,
        });
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updateProduct(req)

        sendSuccessResponse(res, {
            message: GeneralMessages.SuccessUpdateData,
            statusCode: StatusCodes.OK,
            data: result,
        });
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteProduct(req);

        sendSuccessResponse(res, {
            message: GeneralMessages.SuccessDeleteData,
            statusCode: StatusCodes.OK,
            data: result,
        });
    } catch (error) {
        next(error)
    }
}

module.exports = {
    index,
    find,
    create,
    update,
    destroy
}