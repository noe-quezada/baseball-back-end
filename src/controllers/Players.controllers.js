import Players from "../models/Players.model.js";

export const getAll = async (req, res) => {
  try {
    const data = await Players.find();
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getOne = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Players.findById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const post = async (req, res) => {
  const dbPlayers = req.body;
  dbPlayers.forEach((element, i) => {
    dbPlayers[i] = {
      name: element,
      points: 0,
    };
  });

  try {
    const data = await Players.create(dbPlayers);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const put = async (req, res) => {
  const { id } = req.params;
  const { name, points } = req.body;

  try {
    if (points < 0 || points % 1 !== 0) {
      res.send("points cannot be negative nor floats");
    } else {
      const data = await Players.updateOne(
        { _id: id },
        { $set: { name, points } }
      );
      res.status(200).send(data);
    }
  } catch (error) {
    res.status(500).send(err);
  }
};

export const deleteOne = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Players.deleteOne({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(err);
  }
};
