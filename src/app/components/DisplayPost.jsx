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
    <div>
      {displayHeader === true ? (
        <DisplayPostHeader
          userName={userName}
          userId={post.user_id}
          imgURL={post.image_link}
        />
      ) : (
        <div></div>
      )}

      <p>{post.content}</p>
      <p>{post.time.toString()}</p>
      <Likes action={like} totalLikes={post.total_likes} postId={post.id} />
      {/* <Button1 caption="Like" action={like} />
      <p>Likes: {post.total_likes}</p> */}
    </div>
  );
}
