const model = require("../models/workout");
const express = require("express");
const app = express.Router();

app.get("/", (req, res, next) => {
  model
    .getAll()
    .then((x) => res.send(x))
    .catch(next);
});

app.get("/:workoutid", (req, res, next) => {
  const workoutid = req.params.workoutid;
  model
    .get(workoutid)
    .then((x) => res.send(x))
    .catch(next);
});

app.get("/user/:userid", (req, res, next) => {
  const userid = req.params.userid;
  model
    .getByUser(userid)
    .then((x) => res.send(x))
    .catch(next);
});

app.post("/", (req, res, next) => {
  model
    .add(req.body)
    .then((x) => res.send(x))
    .catch(next);
});

app.patch("/:workoutid", (req, res, next) => {
  const workoutid = req.params.workoutid;
  model
    .update(workoutid, req.body)
    .then((x) => res.send(x))
    .catch(next);
});

app.delete("/:workoutid", (req, res, next) => {
  const workoutid = req.params.workoutid;
  model
    .remove(workoutid)
    .then((x) => res.send(x))
    .catch(next);
});

module.exports = app;
