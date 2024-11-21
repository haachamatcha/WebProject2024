import { ref } from 'vue'
import data from '../data/posts.json'
//import type { DataListEnvelope } from './dataEnvelope'

import type { DataEnvelope, DataListEnvelope } from './dataEnvelope'
import { api } from './myFetch'

export async function getAll() {
  return api<DataListEnvelope<Post>>('posts')
}

export async function getById(id: number) {
  return api<DataEnvelope<Post>>(`posts/${id}`)
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

export function deletePost(postid: number) {
  const index = postList.value.findIndex(p => p.postid === postid)
  postList.value.splice(index, 1)
}

/**
* Toggles the like status of a post.
* @param isLiked
* @param likesCount
*/
export const toggleLike = (isLiked: { value: boolean }, likesCount: { value: number }): void => {
  if (isLiked.value) {
      likesCount.value--;
  } else {
      likesCount.value++;
  }
  isLiked.value = !isLiked.value;
};

/**
* Submits a new comment to a post.
* @param newComment
* @param comments
*/
export const submitComment = (
  newComment: { value: string },
  comments: { value: Comment[] }
): void => {
  if (newComment.value.trim()) {
      comments.value.push({
          username: 'currentUser',
          comment: newComment.value.trim(),
          date: new Date().toLocaleDateString(),
      });
      newComment.value = '';
  }
};
