import express from "express";
// import Players from "../models/Players.model.js";
import {
  getAll,
  getOne,
  post,
  put,
  deleteOne,
} from "../controllers/Players.controllers.js";
const router = express.Router();

//Create a player
router.post(
  "/players",post /*(req, res) => {
  const dbPlayers = req.body;

  Players.create(dbPlayers, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
}*/
);

//Get ALL Players
router.get(
  "/players",getAll /*(req, res) => {
  Players.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}*/
);

//Get ONE Player
router.get(
  "/players/:id",getOne /*(req, res) => {
  const { id } = req.params;

  Players.findById(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}*/
);

//Update a Player
router.put(
  "/players/:id",put /*(req, res) => {
  const { id } = req.params;
  const { name, points } = req.body;

  Players.updateOne({ _id: id }, { $set: { name, points } }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}*/
);

//Delete a Player
router.delete(
  "/players/:id",deleteOne /*(req, res) => {
  const { id } = req.params;

  Players.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}*/
);

export default router;
