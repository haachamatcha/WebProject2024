const model = require('../models/users');
const express = require('express');
const app = express.Router();

app.get("/", (req, rest, next) => {
    model
    .getAllUsers()
    .then((x) => rest.send(x))
    .catch(next);
})

.get("/:id", (req, rest, next) => {
    const id = req.params.id;
    model
    .getUser(id)
    .then((x) => rest.send(x))
    .catch(next);
})

.post("/", (req, rest, next) => {
    model
    .addUser(req.body)
    .then((x) => rest.send(x))
    .catch(next);
})

.patch("/:id", (req, rest, next) => {
    const id = req.params.id;
    model
    .updateUser(+id, req.body)
    .then((x) => rest.send(x))
    .catch(next);
})

.delete("/:id", (req, rest, next) => {
    const id = req.params.id;
    model
    .deleteUser(+id)
    .then((x) => rest.send(x))
    .catch(next);
})

module.exports = app;