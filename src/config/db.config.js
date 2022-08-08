import dotenv from "dotenv";


//app config
dotenv.config();

const db = {
  PORT: process.env.PORT,
  URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
};

console.log(process.env.DB_USER);

export default db;
