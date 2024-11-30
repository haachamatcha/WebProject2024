const model = require("../models/posts");
const express = require("express");
const app = express.Router();

/* Four ways to send data to the server:
 * 1. Query String
 * 2. URL Parameters
 * 3. Headers
 * 4. Body
 */

// Get all posts
app.get("/", (req, res, next) => {
    model
        .getAll()
        .then((posts) => res.send(posts))
        .catch(next);
});

// Get a specific post by ID
app.get("/:postid", (req, res, next) => {
    const postid = req.params.postid;
    model
        .get(+postid)
        .then((post) => res.send(post))
        .catch(next);
});

app.get("/user/:userid", (req, res, next) => {
    const userid = req.params.userid;
    model
        .getByUser(+userid)
        .then((posts) => res.send(posts))
        .catch(next);
});
// Add a new post
app.post("/", (req, res, next) => {
    model
        .add(req.body)
        .then((newPost) => res.send(newPost))
        .catch(next);
});

// Update an existing post
app.patch("/:postid", (req, res, next) => {
    const postid = req.params.postid;
    model
        .update(+postid, req.body)
        .then((updatedPost) => res.send(updatedPost))
        .catch(next);
});

// Delete a post by ID
app.delete("/:postid", (req, res, next) => {
    const postid = req.params.postid;
    model
        .remove(+postid)
        .then((result) => res.send(result))
        .catch(next);
});

module.exports = app;
