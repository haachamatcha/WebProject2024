import data from '../data/users.json'
import type { DataListEnvelope } from './dataEnvelope'

export function getAll(): DataListEnvelope<User> {
  return {
    data: data.users,
    total: data.users.length
  }
}   

export interface User {
    firstname: string
    lastname: string
    username: string
    email: string
    isadmin: boolean
}