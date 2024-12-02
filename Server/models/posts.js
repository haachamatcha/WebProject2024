const data = require("../data/posts.json"); // Adjust the path to your JSON file
const { getConnection } = require("./supabase");
const conn = getConnection();

async function getAll() {
  const { data, error, count } = await conn
    .from("posts")
    .select("*", { count: "estimated" });
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
    total: count,
  };
}

async function get(postid) {
  const { data, error } = await conn
    .from("posts")
    .select("*")
    .eq("postid", postid);
  return {
    isSuccess: !error,
    message: error?.message,
    data: data[0],
  };
}

/*async function getByUser(userid) {
    const userPosts = data.posts.filter((post) => post.userid === userid);
    return {
        isSuccess: true,
        data: userPosts,
        total: userPosts.length,
    };
}*/
async function getByUser(userid) {
  const { data, error, count } = await conn
    .from("posts")
    .select("*")
    .eq("userid", userid);
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
    total: count,
  };
}

async function add(post) {
  const { data, error } = await conn
    .from("posts")
    .insert([
      {
        userid: post.userid,
        firstName: post.firstName,
        lastName: post.lastName,
        username: post.username,
        postType: post.postType,
        calories: post.calories,
        record: post.record,
        unit: post.unit,
        date: post.date,
        caption: post.caption,
        image: post.image,
      },
    ])
    .select("*")
    .single();
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  };
}

async function seed(){
    for (const post of data.posts) {
        await add(post)
    }
}

/*async function update(postid, updatedPost) {
  const postIndex = data.posts.findIndex((item) => item.postid === postid);
  if (postIndex === -1)
    throw { isSuccess: false, message: "Post not found", data: postid };

  Object.assign(data.posts[postIndex], updatedPost);
  return {
    isSuccess: true,
    data: data.posts[postIndex],
  };
}*/
async function update(postid, updatedPost) {
  const { data, error } = await conn
    .from("posts")
    .update({
      userid: updatedPost.userid,
      firstName: updatedPost.firstName,
      lastName: updatedPost.lastName,
      username: updatedPost.username,
      postType: updatedPost.postType,
      calories: updatedPost.calories,
      record: updatedPost.record,
      unit: updatedPost.unit,
      date: updatedPost.date,
      caption: updatedPost.caption,
      image: updatedPost.image,
    })
    .eq("postid", postid)
    .select("*")
    .single();
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
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
