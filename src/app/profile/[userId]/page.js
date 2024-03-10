//profile view page

import DisplayPost from "@/app/components/DisplayPost";
import EditProfile from "@/app/components/EditProfile";
import Nav from "@/app/components/Nav";
import ViewProfile from "@/app/components/ViewProfile";
import { getProfile, getPosts } from "@/utils/utils";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs";

export default async function Page({ params }) {
  const { userId } = auth();

  const userProfile = await getProfile(params.userId);

  const posts = await getPosts(userId);

  const userPosts = posts.filter((post) => post.user_id === params.userId);

  if (!userProfile) {
    notFound();
  }

  return (
    <div>
      <Nav />
      <ViewProfile profile={userProfile} />
      <EditProfile profile={userProfile} />
      {userPosts.map((post) => (
        <div key={post.id} className="m-10 ml-10 mr-10 mx-auto">
          <DisplayPost post={post} displayHeader={false} />
        </div>
      ))}
    </div>
  );
}
