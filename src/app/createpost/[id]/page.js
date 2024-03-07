import CreatePost from "@/app/components/CreatePost";
import { savePost } from "@/utils/utils";

export default function Page({ params }) {
  async function createPost(formData) {
    "use server";
    console.log("########" + params.id);
    savePost({ formData });
  }

  return (
    <div>
      <CreatePost action={createPost} user_id={params.id} />
    </div>
  );
}
