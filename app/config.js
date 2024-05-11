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
};