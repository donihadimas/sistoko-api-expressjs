const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  urlDb : process.env.NODE_ENV == "production" ? process.env.MONGODB_URL : process.env.MONGODB_URL_DEV,
};