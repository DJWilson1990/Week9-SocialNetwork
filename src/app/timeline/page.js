//global timeline

import { UserButton, currentUser, auth } from "@clerk/nextjs";
import Button1 from "../components/Button1";
import { getPosts, getProfile, updateProfileImage } from "@/utils/utils";
import DisplayPost from "../components/DisplayPost";
import { redirect } from "next/navigation";
import Nav from "../components/Nav";

export default async function Page() {
  const { userId } = auth();
  if (userId) {
    const user = await currentUser();
    const userProfile = await getProfile(userId);
    if (userProfile.image_link !== user.imageUrl) {
      await updateProfileImage(userId, user.imageUrl);
    }
  } else {
    redirect("/");
  }
  const posts = await getPosts(userId);
  async function newPost() {
    "use server";
    redirect(`/createpost/${userId}`);
  }

  return (
    <div className="flex flex-col">
      <Nav />
      <div className="flex items-center ml-10 mr-10">
        <div>
          <Button1 caption="Create Post" action={newPost} />
        </div>
      </div>
      {posts.map((post) => (
        <div key={post.id} className="m-10">
          <DisplayPost post={post} displayHeader={true} />
        </div>
      ))}
    </div>
  );
}
