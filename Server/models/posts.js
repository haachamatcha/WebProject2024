const data = require("../data/posts.json"); // Adjust the path to your JSON file
//const db = require("./supabase");
//const conn = getConnection();

async function getAll() {
    return {
        isSuccess: true,
        data: data.posts,
        total: data.posts.length,
    };
}
/*async function getAll(){
    const {data, error} = await conn.from('posts').select('*', {count: "estimated"});
    return {
        isSuccess: true,
        data: data.posts,
        total: data.posts.length,
    };
}*/

async function get(postid) {
    const post = data.posts.find((item) => item.postid === postid);
    return {
        isSuccess: !!post,
        data: post,
    };
}

async function getByUser(userid) {
    const userPosts = data.posts.filter((post) => post.userid === userid);
    return {
        isSuccess: true,
        data: userPosts,
        total: userPosts.length,
    };
}

async function add(post) {
    post.postid = data.posts.reduce((prev, x) => (x.postid > prev ? x.postid : prev), 0) + 1;
    data.posts.push(post);
    return {
        isSuccess: true,
        data: post,
    };
}

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
    getByUser,
    add,
    update,
    remove,
};
