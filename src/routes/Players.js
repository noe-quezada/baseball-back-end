import express from "express";
import {
  getAll,
  getOne,
  post,
  put,
  deleteOne,
} from "../controllers/Players.controllers.js";
const router = express.Router();

//Create a player
router.post("/players", post);

//Get ALL Players
router.get("/players", getAll);

//Get ONE Player
router.get("/players/:id", getOne);

//Update a Player
router.put("/players/:id", put);

//Delete a Player
router.delete("/players/:id", deleteOne);

export default router;
