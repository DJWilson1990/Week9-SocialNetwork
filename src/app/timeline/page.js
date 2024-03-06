import { sql } from "@vercel/postgres";
import SubmitBtn from "../components/SubmitBtn";

export default async function Page({ params }) {
  //   const posts = (await sql`SELECT * FROM posts`).rows;
  async function handlePost(formData) {
    "use server";
    const content = formData.get("content");
    const time = formData.get("time");
    const user_id = formData.get("user_id");

    await sql`INSERT INTO posts (content, time, user_id) VALUES (${content}, ${time}, ${user_id})`;
  }
  return (
    <div>
      <form action={handlePost}>
        <label className="m-4">Create a post</label>
        <textarea
          className="m-4 border"
          name="post"
          placeholder="Write a post"
        />
        <SubmitBtn />
      </form>
      {/* <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.post}</p>
            <p>{post.time}</p>
            <p>{post.user_id}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
