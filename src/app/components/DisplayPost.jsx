import DisplayPostHeader from "./DisplayPostHeader";

export default function DisplayPost({ post }) {
  const userName = `${post.first_name} ${post.last_name}`;
  console.log(userName);
  return (
    <div>
      <DisplayPostHeader userName={userName} />
      <p>{post.content}</p>
      <p>{post.time.toString()}</p>
    </div>
  );
}
