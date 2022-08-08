import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Players from "./src/models/Players.model.js";
import dbConfig from "./src/config/db.config.js";
import "./src/connection/dbConnection.js";
import "./src/middlewares/Players.js";
import router from "./src/routes/Players.js";

import dontenv from "dotenv";
const app = express();
dontenv.config();

//MiddleWares
app.use(express.json());
app.use(cors());
app.use("/api", router);

//Listener
app.listen(dbConfig.PORT, () =>
  console.log(`listening on localhost: ${dbConfig.PORT}`)
);
