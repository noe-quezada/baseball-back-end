import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
  name: String,
  points: Number,
});

export default mongoose.model("players", playerSchema);
