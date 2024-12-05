import { ref } from 'vue';
import type { DataListEnvelope, DataEnvelope } from './dataEnvelope';
import { api } from './myFetch';
export const currentStats = ref<Stats | null>(null);

export async function getAll() {
  return api<DataListEnvelope<Stats>>('stats')
}

export async function get(userid: number) {
  const response = await api<DataEnvelope<Stats>>(`stats/${userid}`);
  return response.data;
}

export async function add(stats: Stats) {
  return api<DataEnvelope<Stats>>('stats', stats)
}

export async function update(stats: Stats) {
  return api<DataEnvelope<Stats>>(`stats/${stats.userid}`, stats, 'PATCH')
}

export async function remove(id: number) {
  return api<DataEnvelope<Stats>>(`stats/${id}`, undefined, 'DELETE')
}

export interface Stats {
    userid: number,
    today_lift: number,
    today_time: number,
    today_dist: number,
    today_cal: number,
    max_lift: number,
    max_time: number,
    max_dist: number,
    max_cal: number
}
