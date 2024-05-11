const EmployeesModel = require('../../api/v1/master-data/employees/employeesModel')
const { NotFoundError } = require("../../errors")

const getAllEmployees = async (req) => {
    const { page, pageSize, search } = req.query;

    if (!page || !pageSize) {
        let query = {};
        if (search) {
            query = { employeeFullName: { $regex: new RegExp(search, "i") } };
        }
        const allEmployees = await EmployeesModel.find(query);
        return {
            totalData: allEmployees.length,
            employees: allEmployees,
        };
    }

    let query = {};
    if (search) {
        query = { employeeFullName: { $regex: new RegExp(search, "i") } };
    }

    const totalCount = await EmployeesModel.countDocuments(query);

    const result = await EmployeesModel.find(query)
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({ createdAt: -1 });

    return {
        totalData: totalCount,
        page,
        pageSize,
        employees: result,
    };
}

const getOneEmployees = async (req) => {

    const { id } = req.params;
    const result = await EmployeesModel.findOne({ _id: id })

    if (!result) throw new NotFoundError(`Id Karyawan Tidak ditemukan`)

    return result;
}

const createEmployees = async (req) => {
    const { employeeUsername, employeeFullName, employeePhoneNumber, employeeAddress, employeeRole } = req.body;

    const result = await EmployeesModel.create({ employeeUsername, employeeFullName, employeePhoneNumber, employeeAddress, employeeRole })
    return result;
}

const updateEmployees = async (req) => {
    const { id } = req.params;
    const { employeeUsername, employeeFullName, employeePhoneNumber, employeeAddress, employeeRole } = req.body;

    const result = await EmployeesModel.findOneAndUpdate(
        { _id: id },
        { employeeUsername, employeeFullName, employeePhoneNumber, employeeAddress, employeeRole },
        { new: true, runValidators: true }
    )

    if (!result) throw new NotFoundError(`Id Karyawan Tidak ditemukan`);

    return result;
}

const deleteEmployees = async (req) => {
    const { id } = req.params;

    const result = await EmployeesModel.findOneAndDelete({ _id: id })

    if (!result) throw new NotFoundError(`Id Karyawan Tidak ditemukan`);

    return result;
}

module.exports = {
    getAllEmployees,
    getOneEmployees,
    createEmployees,
    updateEmployees,
    deleteEmployees
}