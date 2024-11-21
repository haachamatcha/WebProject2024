/** @type {{ posts: Post[] }} */
const data = require("../data/posts.json"); // Adjust the path to your JSON file
const db = require("./supabase");
const conn = getConnection();

/**
 * @template T
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/**
 * @typedef {import("../../Client/src/models/posts").Post} Post
 */

/**
 * Get all posts
 * @returns {Promise<DataListEnvelope<Post>>}
 */
/*async function getAll() {
    return {
        isSuccess: true,
        data: data.posts,
        total: data.posts.length,
    };
}*/
async function getAll(){
    const {data, error} = await conn.from('posts').select('*', {count: "estimated"});
    return {
        isSuccess: true,
        data: data.posts,
        total: data.posts.length,
    };
}

/**
 * Get a post by ID
 * @param {number} postid
 * @returns {Promise<DataEnvelope<Post>>}
 */
async function get(postid) {
    const post = data.posts.find((item) => item.postid === postid);
    return {
        isSuccess: !!post,
        data: post,
    };
}

/**
 * Add a new post
 * @param {Post} post
 * @returns {Promise<DataEnvelope<Post>>}
 */
async function add(post) {
    post.postid = data.posts.reduce((prev, x) => (x.postid > prev ? x.postid : prev), 0) + 1;
    data.posts.push(post);
    return {
        isSuccess: true,
        data: post,
    };
}

/**
 * Update an existing post
 * @param {number} postid
 * @param {Post} updatedPost
 * @returns {Promise<DataEnvelope<Post>>}
 */
async function update(postid, updatedPost) {
    const postIndex = data.posts.findIndex((item) => item.postid === postid);
    if (postIndex === -1)
        throw { isSuccess: false, message: "Post not found", data: postid };

    Object.assign(data.posts[postIndex], updatedPost);
    return {
        isSuccess: true,
        data: data.posts[postIndex],
    };
}

/**
 * Remove a post
 * @param {number} postid
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(postid) {
    const postIndex = data.posts.findIndex((item) => item.postid === postid);
    if (postIndex === -1)
        throw { isSuccess: false, message: "Post not found", data: postid };

    data.posts.splice(postIndex, 1);
    return { isSuccess: true, message: "Post deleted", data: postid };
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
};
