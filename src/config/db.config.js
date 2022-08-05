import dotenv from "dotenv";


//app config
dotenv.config();

// console.log(`Your port is ${process.env.PORT} sadf`);
const DB_USER =  env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const db = {
  PORT: process.env.PORT,
  URL: `mongodb+srv://${process.env.DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
};

export default db;
