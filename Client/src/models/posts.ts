import { ref } from 'vue'
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
  calories?: number
  date: string
  time?: string
  distance?: string
  caption: string
  weight?: string
  photo?: string
  postid: number
  userid: number
}

const postList = ref<Post[]>(data.posts)
export const userPost = () => postList

export function addPost(post: Post) {
  post.postid = data.posts.length + 1
  postList.value.push(post)
}

export interface Comment {
  username: string;
  comment: string;
  date: string;
}