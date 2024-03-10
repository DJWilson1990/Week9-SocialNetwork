//profile view page

import DisplayPost from "@/app/components/DisplayPost";
import EditProfile from "@/app/components/EditProfile";
import ViewProfile from "@/app/components/ViewProfile";
import { getProfile, getUserPosts } from "@/utils/utils";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const userProfile = await getProfile(params.userId);

  const posts = await getUserPosts(params.userId);

  if (!userProfile) {
    notFound();
  }

  // console.log(posts);

  return (
    <div>
      <p>This will be a page to view a profile and associated posts!</p>
      <ViewProfile profile={userProfile} />
      <EditProfile profile={userProfile} />
      {posts.map((post) => (
        <div key={post.id} className="m-10 ml-10 mr-10 mx-auto">
          <DisplayPost post={post} displayHeader={false} />
        </div>
      ))}
    </div>
  );
}
