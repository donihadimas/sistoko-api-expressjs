
const createTokenUser = (user) => ({
    id: user._id,
    userName: user.userName,
    fullName: user.fullName,
    email: user.email,
    roleid: user.roleId,
})

module.exports = {
    createTokenUser
}