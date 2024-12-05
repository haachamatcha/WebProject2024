const { getConnection } = require("./supabase");
const conn = getConnection();

async function getAll() {
  const { data, error, count } = await conn
    .from("stats")
    .select("*", { count: "estimated" });
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
    max: count,
  };
}

async function get(userid) {
  const { data, error } = await conn
    .from("stats")
    .select("*")
    .eq("userid", userid)
    .single();
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  };
}

async function add(stat) {
  const { data, error } = await conn
    .from("stats")
    .insert([
      {
        userid: stat.userid,
        today_lift: stat.today_lift,
        today_time: stat.today_time,
        today_dist: stat.today_dist,
        max_lift: stat.max_lift,
        max_time: stat.max_time,
        max_dist: stat.max_dist,
        today_cal: stat.today_cal,
        max_cal: stat.max_cal
      },
    ])
    .single();
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  };
}

async function update(id, stat) {
  const { data, error } = await conn
    .from("stats")
    .update({
      userid: stat.userid,
      today_lift: stat.today_lift,
      today_time: stat.today_time,
      today_dist: stat.today_dist,
      max_lift: stat.max_lift,
      max_time: stat.max_time,
      max_dist: stat.max_dist,
      today_cal: stat.today_cal,
      max_cal: stat.max_cal
    })
    .eq("userid", id)
    .select("*")
    .single();
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  };
}

async function remove(id){
    const { data, error } = await conn
        .from("stats")
        .delete()
        .eq("id", id)
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
    add,
    update,
    remove,
};