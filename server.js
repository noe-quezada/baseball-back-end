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

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
