/* eslint-disable no-useless-escape */
const phoneRegex = /^(0)[0-9]{9,12}$/
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const usernameRegex = /^[a-zA-Z0-9]+$/;

module.exports = {
    phoneRegex,
    emailRegex,
    passwordRegex,
    usernameRegex
};