import DisplayPostHeader from "./DisplayPostHeader";

export default function DisplayPost({ post }) {
  const userName = `${post.first_name} ${post.last_name}`;
  console.log(userName);
  console.log("///////////" + post.user_id);
  return (
    <div>
      <DisplayPostHeader
        userName={userName}
        userId={post.user_id}
        imgURL={post.image_link}
      />
      <p>{post.content}</p>
      <p>{post.time.toString()}</p>
    </div>
  );
}
