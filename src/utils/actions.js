"use server";

import { addLike } from "./utils";

export async function likePost({ postId, userId, totalLikes }) {
  console.log("like post action");
  console.log(postId);
  console.log(userId);
  const result = await addLike(postId, userId, totalLikes);
}
