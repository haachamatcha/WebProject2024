const model = require('../models/users');
const express = require('express');
const app = express.Router();

app.get("/", async (req, res, next) => {
  try {
    const result = await model.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
})
.get("/:id", async (req, res, next) => {
  try {
    const result = await model.get(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
})
.post("/", async (req, res, next) => {
  try {
    const result = await model.add(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
})
.patch("/:id", async (req, res, next) => {
  try {
    const result = await model.update(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
})
.delete("/:id", async (req, res, next) => {
  try {
    const result = await model.remove(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = app;