import { ref } from 'vue'
import data from '../data/posts.json'
import type { DataEnvelope, DataListEnvelope } from './dataEnvelope'
import { api } from './myFetch'

export async function getAll() {
  return api<DataListEnvelope<Post>>('posts')
}

export async function get(id: number) {
  return api<DataEnvelope<Post>>(`posts/${id}`)
}

export async function getByUser(userid: number) {
  return api<DataListEnvelope<Post>>(`posts/user/${userid}`)
}

export function create(post: Post) {
  return api<DataEnvelope<Post>>('posts', post)
}

export function update(post: Post) {
  return api<DataEnvelope<Post>>(`posts/${post.postid}`, post, 'PATCH')
}

export function remove(id: number) {
  return api<DataEnvelope<Post>>(`posts/${id}`, undefined, 'DELETE')
}

export interface Post {
  postid: number
  userid: number
  firstName: string
  lastName: string
  username: string
  postType: string
  calories: number
  record: number
  unit: string
  date: string
  caption: string
  photo: string
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

export function deletePost(postid: number) {
  const index = postList.value.findIndex(p => p.postid === postid)
  postList.value.splice(index, 1)
}

