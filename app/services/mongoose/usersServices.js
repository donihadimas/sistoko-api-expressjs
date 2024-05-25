const UsersModel = require('../../api/v1/users/usersModel')
const { NotFoundError, BadRequestError } = require("../../errors")

const getAllUsers = async (req) => {
    const { page, pageSize, search } = req.query;

    if (!page || !pageSize) {
        let query = {};
        if (search) {
            query = { fullName: { $regex: new RegExp(search, "i") } };
        }
        const allUsers = await UsersModel.find(query);
        return {
            totalData: allUsers.length,
            data: allUsers,
        };
    }

    let query = {};
    if (search) {
        query = { fullName: { $regex: new RegExp(search, "i") } };
    }

    const totalCount = await UsersModel.countDocuments(query);

    const result = await UsersModel.find(query)
        .select('-password')
        .populate({
            path: 'roleId',
            populate: {
                path: 'permissionsId'
            }
        })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({ createdAt: -1 });

    return {
        totalData: totalCount,
        page,
        pageSize,
        data: result,
    };
}

const getOneUsers = async (req) => {

    const { id } = req.params;
    const result = await UsersModel.findOne({ _id: id })
        .select('-password')
        .populate({
            path: 'roleId',
            populate: {
                path: 'permissionsId'
            }
        })

    if (!result) throw new NotFoundError(`Id Pengguna Tidak ditemukan`)

    return result;
}

const createUsers = async (req) => {
    const { userName, fullName, email, phoneNumber, password, confirmPassword, address, roleId } = req.body;
    if (password !== confirmPassword) {
        throw new BadRequestError('Password dan Konfirmasi password tidak cocok');
    }

    const result = await UsersModel.create({ userName, fullName, email, phoneNumber, password, address, roleId })

    delete result._doc.password;

    return result;
}

const updateUsers = async (req) => {
    const { id } = req.params;
    const { userName, fullName, email, phoneNumber, password, confirmPassword, address, roleId } = req.body;

    const result = await UsersModel.findOneAndUpdate(
        { _id: id },
        { userName, fullName, email, phoneNumber, password, confirmPassword, address, roleId },
        { new: true, runValidators: true }
    )

    if (!result) throw new NotFoundError(`Id Pengguna Tidak ditemukan`);

    return result;
}

const deleteUsers = async (req) => {
    const { id } = req.params;

    const result = await UsersModel.findOneAndDelete({ _id: id })

    if (!result) throw new NotFoundError(`Id Pengguna Tidak ditemukan`);

    return result;
}

module.exports = {
    getAllUsers,
    getOneUsers,
    createUsers,
    updateUsers,
    deleteUsers
}