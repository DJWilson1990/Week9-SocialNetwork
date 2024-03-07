//global timeline

import { UserButton, currentUser, auth } from "@clerk/nextjs";
import Button1 from "../components/Button1";
import { getPosts } from "@/utils/utils";
import DisplayPost from "../components/DisplayPost";
import { redirect } from "next/navigation";

export default async function Page() {
  const posts = await getPosts();
  console.log(posts);

  const { userId } = auth();
  if (userId) {
    const user = currentUser();
  }

  async function newPost() {
    "use server";
    console.log("newPost action");
    redirect(`/createpost/${userId}`);
  }

  return (
    <div>
      <h1>Timeline</h1>
      <UserButton afterSignOutUrl="/" />
      <Button1 caption="Create Post" action={newPost} />
      {posts.map((post) => (
        <div key={post.id}>
          <DisplayPost post={post} />
        </div>
      ))}
    </div>
  );
}
