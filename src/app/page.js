import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) {
    redirect("/timeline");
  }
  return (
    <div>
      <div
        className="bg-scroll h-dvh w-dvw bg-cover"
        style={{
          backgroundImage: `url('/background-geometric.png')`,
        }}
      >
        <h1 className="bg-white w-96 text-center font-bold mx-auto my-auto">
          A Social Network
          <SignInButton
            mode="modal"
            className="bg-white w-96 font-bold hover:text-blue-400 mx-auto"
          />
        </h1>
      </div>
    </div>
  );
}
