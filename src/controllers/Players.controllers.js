import Players from "../models/Players.model.js";

export const getAll = async (req, res) => {
  await Players.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

export const getOne = async (req, URLres) => {
  const { id } = req.params;

  await Players.findById(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

export const post = async (req, res) => {
  const dbPlayers = req.body;

  await Players.create(dbPlayers, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

export const put = async (req, res) => {
  const { id } = req.params;
  const { name, points } = req.body;

  await Players.updateOne(
    { _id: id },
    { $set: { name, points } },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    }
  );
};

export const deleteOne = async (req,res) =>{
    const { id } = req.params;

  Players.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}
