const dotenv = require('dotenv');
dotenv.config();

let urlDb;

if (process.env.NODE_ENV === "staging") {
  urlDb = process.env.MONGODB_URL;
} else if (process.env.NODE_ENV === "production") {
  urlDb = process.env.MONGODB_URL_PROD;
} else {
  urlDb = process.env.MONGODB_URL_DEV;
}

module.exports = {
  urlDb,
  jwtExpiration: process.env.JWT_EXPIRATION,
  jwtSecret: process.env.JWT_SECRET_KEY,
  jwtRefreshTokenExpiration: process.env.JWT_REFRESH_TOKEN_EXPIRATION,
  jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
};