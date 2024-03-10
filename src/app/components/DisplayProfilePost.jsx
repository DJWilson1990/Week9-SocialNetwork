export default function DisplayProfilePost({ post }) {
  return (
    <div className="m-2">
      <p>{post.content}</p>
      <p>{post.time.toString()}</p>
    </div>
  );
}
