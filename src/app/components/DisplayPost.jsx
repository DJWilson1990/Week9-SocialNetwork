import { likePost } from "@/utils/actions";
import { auth } from "@clerk/nextjs";

import DisplayPostHeader from "./DisplayPostHeader";
import Likes from "./Likes";

export default function DisplayPost({ post, displayHeader }) {
  const userName = `${post.first_name} ${post.last_name}`;

  async function like() {
    "use server";

    const { userId } = auth();

    const result = await likePost({
      postId: post.id,
      userId: userId,
    });
    console.log("displayPost-like: " + result.success);
    return result.success;
  }

  return (
    <div className="border p-4">
      {displayHeader === true ? (
        <DisplayPostHeader
          userName={userName}
          userId={post.user_id}
          imgURL={post.image_link}
        />
      ) : (
        <div></div>
      )}

      <p className="text-xl mt-2">{post.content}</p>
      <p className="text-sm mt-2">{post.time.toISOString()}</p>
      <Likes
        action={like}
        totalLikes={post.total_likes}
        postId={post.id}
        postLiked={post.liked}
      />
    </div>
  );
}
