import data from '../data/posts.json'
import type { DataListEnvelope } from './dataEnvelope'

export function getAll(): DataListEnvelope<Post> {
  return {
    data: data.posts,
    total: data.posts.length

    
  }
}

export interface Post {
  firstName: string
  lastName: string
    username: string
    postType: string
    calories: number
    date: string
    time?: string
    distance?: string
    caption: string
    weight?: string
    postid: number
}
