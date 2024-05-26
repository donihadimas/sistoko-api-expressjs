const buildQuery = (search, fields) => {
    if (search && fields.length > 0) {
        const searchConditions = fields.map(field => ({
            [field]: { $regex: new RegExp(search, "i") }
        }));
        return { $or: searchConditions };
    }
    return {};
}
module.exports = {
    buildQuery
}