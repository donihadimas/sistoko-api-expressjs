const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  urlDb: process.env.NODE_ENV == "production_local" ? process.env.MONGODB_URL : process.env.NODE_ENV == "production" ? process.env.MONGODB_URL_PROD : process.env.MONGODB_URL_DEV,
};