import CreatePost from "@/app/components/CreatePost";
import { savePost } from "@/utils/utils";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  async function createPost(formData) {
    "use server";

    await savePost({ formData });
    redirect("/timeline");
  }

  return (
    <div>
      <CreatePost action={createPost} user_id={params.id} />
    </div>
  );
}
