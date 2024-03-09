"use server";

import { redirect } from "next/navigation";
import { addLike } from "./utils";

// import { useRouter } from "next/navigation";

export async function likePost({ postId, userId, totalLikes, pathName }) {
  // redirect("/timeline");
  // const router = useRouter;
  console.log("~~~~~l~~~~~~~~~~" + pathName);
  addLike(postId, userId, totalLikes);

  // console.log(result.success);
  redirect(`/timeline`);
  // if (result.success === false) {
  //   console.log(">>>>>>>>>>>>>" + pathName);
  //   redirect("/timeline");
  //   // redirect(`${pathName}`);
  // } else {
  //   return result.success;
  // }
}

// export async function saveLikes(postId, userId) {
//   const result = await addLike(postId, userId);
// }
