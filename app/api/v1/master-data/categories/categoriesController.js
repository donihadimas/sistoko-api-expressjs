const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../../../../errors');
const { uploadFiletoMinio } = require('../../../../services/minio/minioClient');
const { getAllCategories, createCategories, getOneCategories, updateCategories, deleteCategories } = require('../../../../services/mongoose/categoriesServices');
const { generateUUID } = require('../../../../utils/helper');
const { sendSuccessResponse } = require('../../../../utils/response');
const { GeneralMessages } = require('../../../../utils/const/message');

const index = async (req, res, next) => {
    try {
        const result = await getAllCategories(req);
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
        const result = await getOneCategories(req)

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
        const { file } = req;
        let result;

        if (file) {
            const filename = generateUUID();
            const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg"];
            const isAllowedMimeType = allowedMimeTypes.includes(file.mimetype);
            if (!isAllowedMimeType) {
                throw new BadRequestError(
                    `File ${file.originalname} has unsupported type ${file.mimeType}. Only ${allowedMimeTypes.join(", ")} are allowed`
                );
            }
            const uploadedFile = await uploadFiletoMinio(file, filename);
            if (!uploadedFile) {
                throw new BadRequestError(
                    "Failed to upload file to server. Please try again later"
                );
            }
            result = await createCategories(req, file.originalname, filename);

        } else {
            result = await createCategories(req);

        }

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

        const result = await updateCategories(req)

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
        const result = await deleteCategories(req);

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