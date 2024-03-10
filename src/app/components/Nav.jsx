import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default function Nav() {
  const { userId } = auth();

  return (
    <div className="m-4 ml-10 flex flex-end">
      <ul>
        <li className="m-4 mt-2 hover:text-white inline-block">
          {userId ? <UserButton afterSignOutUrl="/" /> : <SignInButton />}
        </li>
        <li className="m-2 ml-2 hover:text-blue-400 inline font-bold">
          <Link href={`/profile/${userId}`}>MY PROFILE</Link>
        </li>
        <li className="m-2 hover:text-blue-400 inline font-bold">
          <Link href="/timeline">TIMELINE</Link>
        </li>
      </ul>
    </div>
  );
}
