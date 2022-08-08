import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLenght: 3,
  },
  points: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("players", playerSchema);
