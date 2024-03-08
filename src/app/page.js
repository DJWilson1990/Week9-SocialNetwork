import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  const { userId } = auth();
  if (userId) {
    redirect("/timeline");
  }
  return (
    <div>
      <h1>A Social Network</h1>
      <div>
        <SignInButton mode="modal" />
      </div>
    </div>
  );
}
