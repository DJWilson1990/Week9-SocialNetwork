import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();
  return (
    <div>
      <h1>A Social Network</h1>
      <div>
        <SignInButton mode="modal" />
      </div>
    </div>
  );
}
