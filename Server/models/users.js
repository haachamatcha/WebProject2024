const data = require("../data/users.json");
const { getConnection } = require("./supabase");
const conn = getConnection();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

async function login(email, password) {
  console.log(`Attempting login for email: ${email}`);
  const { data, error } = await conn
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  
  if (error) {
    console.error(`Login error: ${error.message}`);
    return {
      isSuccess: false,
      message: error.message,
      data: null,
      token: null
    };
  }

  const isPasswordValid = await bcrypt.compare(password, data.password);
  if (!isPasswordValid) {
    console.error(`Login error: Invalid password`);
    return {
      isSuccess: false,
      message: "Invalid password",
      data: null,
      token: null
    };
  }

  const token = await createToken(data, 3600000);
  //console.log(`Login successful for email: ${email}, token: ${token}`);
  return {
    isSuccess: true,
    message: "Login successful",
    data: { user: data, token: token }
  };
}

async function add(user) {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const { data, error } = await conn
    .from("users")
    .insert([
      {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        username: user.username,
        password: hashedPassword,
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
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      username: user.username,
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

async function createToken(user, expiresIn) {
  return new Promise((resolve, reject) => {
      jwt.sign({ userid: user.userid, email: user.email }, process.env.JWT_SECRET ?? "", { expiresIn }, (err, token) => {
          if (err) {
              reject(err);
          } else {
              resolve(token);
          }
      });
  });
}

async function verifyToken(token) {
  return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRET ?? "", (err, user) => {
          if (err) {
              reject(err);
          } else {
              resolve(user);
          }
      });
  });
}


module.exports = {
  getAll,
  get,
  add,
  update,
  remove,
  login,
  createToken,
  verifyToken,
};