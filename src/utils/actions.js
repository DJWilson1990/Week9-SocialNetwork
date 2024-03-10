"use server";

import { redirect } from "next/navigation";
import { addLike, saveProfile } from "./utils";

export async function likePost({ postId, userId }) {
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
  console.log("like post" + result.success);
  return result;
}

export async function updateProfile(formData) {
  console.log(formData);
  await saveProfile(formData);
  redirect("/timeline");
}
