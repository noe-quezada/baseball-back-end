import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import Players from "./dbPlayers.js";

//app config
const app = express();
const port = process.env.PORT || 8000;
const connection_url =
  "mongodb+srv://noetorres:noe1234@baseball.co7vu.mongodb.net/?retryWrites=true&w=majority";

//MiddleWares
app.use(express.json());
app.use(cors());

//DB config
mongoose.connect(connection_url);

//API endopoints
app.get("/", (req, res) => res.status(200).send("ghello mate"));

//parse to cast
app.get("/api/players/:name", (req, res) => {
  // const player = Players.find((c) => c.id === String(req.params.name));
  // if (!player) {
  //   res.status(404).send("The player was not found")
  // } else {
  //   res.send(player)
  // }
  res.send(req.params.name);
});

app.post("/players", (req, res) => {
  const dbPlayers = req.body;

  Players.create(dbPlayers, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/players", (req, res) => {
  Players.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.put("/players/:points", (req, res) => {});

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
