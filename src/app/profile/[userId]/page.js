//profile view page

import DisplayPost from "@/app/components/DisplayPost";
import ViewProfile from "@/app/components/ViewProfile";
import { getProfile, getUserPosts } from "@/utils/utils";

export default async function Page({ params }) {
  const userProfile = await getProfile(params.userId);

  const posts = await getUserPosts(params.userId);

  console.log(posts);

  return (
    <div>
      <p>This will be a page to view a profile and associated posts!</p>
      <ViewProfile profile={userProfile} />
      {posts.map((post) => (
        <div key={post.id}>
          <DisplayPost post={post} displayHeader={false} />
        </div>
      ))}
    </div>
  );
}
