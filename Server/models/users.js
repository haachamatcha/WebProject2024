const data = require("../data/users.json");

async function getAllUsers() {
  return {
    isSuccess: true,
    data: data.users,
    total: data.users.length,
  };
}

async function getUser(id) {
  const user = data.users.find((user) => user.userid == id);
  return {
    isSuccess: !!user,
    data: user,
  };
}

async function addUser(user) {
  user.userid = data.users.reduce((prev, x) => (x.userid > prev ? x.userid : prev), 0) + 1;
  data.users.push(user);
  return {
    isSuccess: true,
    data: user,
  };
}

async function updateUser(id, user) {
  const toUpdate = getUser(id);
  Object.assign(toUpdate, user);
  return {
    isSuccess: true,
    data: toUpdate,
  };
}

async function deleteUser(id) {
  const userIndex = data.users.findIndex((user) => user.userid == id);
  if (userIndex === -1)
    throw {
      isSuccess: false,
      message: "User not found",
      data: id,
      status: 404,
    };
  data.users.splice(userIndex, 1);
  return { isSuccess: true, message: "User deleted", data: id };
}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
