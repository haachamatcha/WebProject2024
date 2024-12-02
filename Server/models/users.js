const data = require("../data/users.json");
const { getConnection } = require("./supabase");
const conn = getConnection();

async function getAll() {
  const { data, error, count } = await conn
  .from("users")
  .select("*", { count: "estimated" })
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
    total: count,
  };
}

async function get(id) {
  const { data, error } = await conn
    .from("users")
    .select("*")
    .eq("userid", id)
    .single()
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  };
}

async function add(user) {
  const { data, error } = await conn
    .from("users")
    .insert([
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        password: user.password,
        isadmin: user.isadmin,
        bio: user.bio,
        followers: user.followers,
        following: user.following,
        posts: user.posts,
      },
    ])
    .single()
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  };
}

async function update(id, user) {
  const { data, error } = await conn
    .from("users")
    .update({
      firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        password: user.password,
        isadmin: user.isadmin,
        bio: user.bio,
        followers: user.followers,
        following: user.following,
        posts: user.posts,
    })
    .eq("userid", id)
    select("*")
    .single()
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  };
}

async function remove(id) {
  const { error } = await conn
    .from("users")
    .delete()
    .eq("userid", id)
    .select("*")
    .single()
  return {
    isSuccess: !error,
    message: error?.message,
  };
}

async function seed(){
  for (const user of data.users) {
    await add(user)
  }
}

module.exports = {
  getAll,
  get,
  add,
  update,
  remove,
  seed
};
