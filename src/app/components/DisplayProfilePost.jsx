export default function DisplayProfilePost({ post }) {
  return (
    <div>
      <p>{post.content}</p>
      <p>{post.time.toString()}</p>
    </div>
  );
}
