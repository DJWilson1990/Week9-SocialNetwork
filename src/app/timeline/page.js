//global timeline

import { UserButton, currentUser, auth } from "@clerk/nextjs";
import Button1 from "../components/Button1";
import { getPosts, getProfile, updateProfileImage } from "@/utils/utils";
import DisplayPost from "../components/DisplayPost";
import { redirect } from "next/navigation";
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
// import GlobalError from "../components/GlobalError";

export default async function Page() {
  const posts = await getPosts();

  const { userId } = auth();
  if (userId) {
    const user = await currentUser();
    console.log(user);
    const userProfile = await getProfile(userId);
    console.log(userProfile);
    if (userProfile.image_link !== user.imageUrl) {
      await updateProfileImage(userId, user.imageUrl);
    }
  } else {
    redirect("/");
  }

  async function newPost() {
    "use server";

    redirect(`/createpost/${userId}`);
  }

  return (
    <div>
      {/* <ErrorBoundary fallback={<GlobalError />}> */}
      <h1>Timeline</h1>
      <UserButton afterSignOutUrl="/" />
      <Button1 caption="Create Post" action={newPost} />
      {posts.map((post) => (
        <div key={post.id}>
          <DisplayPost post={post} displayHeader={true} />
        </div>
      ))}
      {/* </ErrorBoundary> */}
    </div>
  );
}
