import { likePost } from "@/utils/actions";

import DisplayPostHeader from "./DisplayPostHeader";
import Likes from "./Likes";

export default function DisplayPost({ post, displayHeader }) {
  const userName = `${post.first_name} ${post.last_name}`;

  async function like(pathName) {
    "use server";
    await likePost({
      postId: post.id,
      userId: post.user_id,
      totalLikes: post.total_likes + 1,
      pathName: pathName,
    });
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
      <p className="text-sm mt-2">{post.time.toString()}</p>
      <Likes action={like} totalLikes={post.total_likes} postId={post.id} />
    </div>
  );
}
