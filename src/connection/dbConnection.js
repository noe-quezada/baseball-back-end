import mongoose from "mongoose";
import db from "../config/db.config.js"

try {
  await mongoose.connect(db.URL);

  console.log("Connected to MongoDB Atlas");
} catch (error) {
  console.error(error);
}
