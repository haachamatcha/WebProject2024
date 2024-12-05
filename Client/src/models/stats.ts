import { ref } from 'vue';
import type { DataListEnvelope, DataEnvelope } from './dataEnvelope';
import { api } from './myFetch';
export const currentStats = ref<Stats | null>(null);

export async function getAll() {
  return api<DataListEnvelope<Stats>>('stats')
}

export async function get(userid: number) {
  return api<DataEnvelope<Stats>>(`stats/${userid}`);
}

export async function addStats(stats: Stats) {
  return api<DataEnvelope<Stats>>('stats', stats)
}

export async function update(stats: Stats) {
  return api<DataEnvelope<Stats>>(`stats/${stats.userid}`, stats, 'PATCH')
}

export async function remove(userid: number) {
  return api<DataEnvelope<Stats>>(`stats/${userid}`, undefined, 'DELETE')
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
