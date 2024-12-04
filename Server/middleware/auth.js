const model = require('../models/users');
const express = require('express');
const app = express.Router();

async function parseToken(request, response, next) {
  const authHeader = request.headers.authorization;
  const token = authHeader?.split(' ')[1];
  if (!token) {
    return next();
  }
  try {
    const payload = await model.verifyToken(token);
    if (payload) {
      request.user = payload;
    }
  } catch (error) {
    console.error("Error while parsing authorization token: ", error);
  }
  next();
}

function requireAdmin(isadmin = false) {
  return function (request, response, next) {
    const user = request.user;
    if (!user) {
      return next({
        status: 401,
        message: "Must be logged in to perform this action."
      });
    }

    if (!isadmin) {
      return next({
        status: 403,
        message: "Must be an admin to perform this action."
      });
    }
    next();
  };
}

module.exports = { parseToken, requireAdmin };