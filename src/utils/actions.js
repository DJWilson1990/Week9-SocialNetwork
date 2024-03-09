"use server";

import { redirect } from "next/navigation";
import { addLike } from "./utils";

export async function likePost({ postId, userId, totalLikes, pathName }) {
  let result = {};

  try {
    const queryResult = await addLike(postId, userId);
    result = {
      success: true,
      message: queryResult,
    };
  } catch (error) {
    result = {
      success: false,
      message: error,
    };
  }
  if (result.success === false) {
    redirect("/timeline");
  } else {
    return result.success;
  }
}
