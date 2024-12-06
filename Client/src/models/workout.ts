import type { DataEnvelope, DataListEnvelope } from './dataEnvelope'
import { api } from './myFetch'

export async function getAll() {
  return api<DataListEnvelope<Workout>>('workout')
}

export async function get(workoutid: number) {
  return api<DataEnvelope<Workout>>(`workout/${workoutid}`)
}

export async function getByUser(userid: number) {
  return api<DataListEnvelope<Workout>>(`workout/user/${userid}`)
}

export function create(workout: Workout) {
  return api<DataEnvelope<Workout>>('workout', workout)
}

export function update(workout: Workout) {
  return api<DataEnvelope<Workout>>(`workout/${workout.workoutid}`, workout, 'PATCH')
}

export function remove(workoutid: number) {
  return api<DataEnvelope<Workout>>(`workout/${workoutid}`, undefined, 'DELETE')
}

export interface Workout {
  workoutid: number
  userid: number | undefined
  exercise_name: string
  type: string
  date: string
  record: number
  unit: string
  count: number
}
