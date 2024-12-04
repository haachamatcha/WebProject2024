const data = require("../data/users.json");
const bcrypt = require("bcrypt");
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

async function login(username, password) {
  const { data, error } = await conn
    .from("users")
    .select("*")
    .eq("username", username)
    .eq("password", password)
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
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        username: user.username,
        password: user.password,
        isadmin: user.isadmin,
        bio: user.bio,
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
    })
    .eq("userid", id)
    .select("*")
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

module.exports = {
  getAll,
  get,
  add,
  update,
  remove,
  login
};