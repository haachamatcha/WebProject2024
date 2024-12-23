const { getConnection } = require("./supabase");
const conn = getConnection();

async function getAll() {
  const { data, error, count } = await conn
    .from("workout")
    .select("*", { count: "estimated" });
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
    max: count,
  };
}

async function get(workoutid) {
  const { data, error } = await conn
    .from("workout")
    .select("*")
    .eq("workoutid", workoutid)
    .single();
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  };
}

async function getByUser(userid) {
  const { data, error, count } = await conn
    .from("workout")
    .select("*")
    .eq("userid", userid)
    .order("date", { ascending: false }); // Sort by date descending
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
    total: count,
  };
}

async function add(workout) {
  const { data, error } = await conn
    .from("workout")
    .insert([
      {
        userid: workout.userid,
        exercise_name: workout.exercise_name,
        type: workout.type,
        date: workout.date,
        record: workout.record,
        unit: workout.unit,
        count: workout.count
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

async function update(workout) {
  const { data, error } = await conn
    .from("workout")
    .update({
      exercise_name: workout.exercise_name,
      type: workout.type,
      date: workout.date,
      record: workout.record,
      unit: workout.unit,
      count: workout.count
    })
    .eq("workoutid", workout.workoutid)
    .single();
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  };
}

async function remove(workoutid) {
  const { data, error } = await conn
    .from("workout")
    .delete()
    .eq("workoutid", workoutid)
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
};
