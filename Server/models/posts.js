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
    .eq("postid", postid)
    .single()
  return {
    isSuccess: !error,
    message: error?.message,
    data: data[0],
  };
}

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
        caption: post.caption
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
  const { data, error } = await conn
    .from("posts")
    .delete()
    .eq("postid", postid)
    .select("*")
    .single();
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  };
}

module.exports = {
  getAll,
  get,
  getByUser,
  add,
  update,
  remove,
  seed
};
