//profile view page

import DisplayPost from "@/app/components/DisplayPost";
import ViewProfile from "@/app/components/ViewProfile";
import { getUserPosts } from "@/utils/utils";

export default async function page({ userId }) {
  const posts = await getUserPosts({ userId });

  return (
    <div>
      <p>This will be a page to view a profile and associated posts!</p>
      {/* <ViewProfile /> */}
      {posts.map((post) => (
        <div key={post.id}>
          <DisplayPost post={post} />
        </div>
      ))}
    </div>
  );
}
