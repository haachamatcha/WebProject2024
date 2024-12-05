const model = require('../models/stats');
const express = require('express');
const app = express.Router();

app.get("/", (req, rest, next) => {
    const userid = req.user.id; // assuming req.user contains the logged-in user's info
    model
    .getAll()
    .then((x) => rest.send(x))
    .catch(next);
})
.get("/:id", (req, rest, next) => {
    const id = req.params.id;
    model
    .get(id)
    .then((x) => rest.send(x))
    .catch(next);
})
.post("/", (req, rest, next) => {
    model
    .add(req.body)
    .then((x) => rest.send(x))
    .catch(next);
})
.patch("/:id", (req, rest, next) => {
    const id = req.params.id;
    model
    .update(+id, req.body)
    .then((x) => rest.send(x))
    .catch(next);
})
.delete("/:id", (req, rest, next) => {
    const id = req.params.id;
    model
    .remove(+id)
    .then((x) => rest.send(x))
    .catch(next);
})

module.exports = app;