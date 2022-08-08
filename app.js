import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import router from "./src/routes/Players.js";
import Players from "./src/models/Players.model.js";
import dbConfig from "./src/config/db.config.js";
import "./src/connection/dbConnection.js"


import dontenv from "dotenv";
const app = express();
dontenv.config();

//MiddleWares
app.use(express.json());
app.use(cors());
app.use("/api", router);

// console.log(process.env.PORT + "d fs ");
//DB config
mongoose
  .connect(dbConfig.URL)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

//Listener
app.listen(dbConfig.PORT, () =>
  console.log(`listening on localhost: ${dbConfig.PORT}`)
);
