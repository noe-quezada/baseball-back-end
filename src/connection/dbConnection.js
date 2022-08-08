import mongoose from "mongoose";

try {
  await mongoose
    .connect(process.env.URL)
    .then(() => console.log("Connected to MongoDB Atlas"));
} catch (error) {
  console.error(error);
}
