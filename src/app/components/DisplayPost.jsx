import { likePost } from "@/utils/actions";
import Button1 from "./Button1";
import DisplayPostHeader from "./DisplayPostHeader";

export default function DisplayPost({ post, displayHeader }) {
  const userName = `${post.first_name} ${post.last_name}`;

  async function like() {
    "use server";
    likePost({
      postId: post.id,
      userId: post.user_id,
      totalLikes: post.total_likes + 1,
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
      <Button1 caption="Like" action={like} />
      <p>Likes: {post.total_likes}</p>
    </div>
  );
}
