import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default function Nav() {
  const { userId } = auth();

  return (
    <div className="m-4 ml-10 flex flex-end">
      <ul>
        {/* <li className="m-2 hover:text-white">
          <Link href="/">HOME</Link>
        </li> */}
        <li className="m-2 hover:text-blue-200 inline font-bold">
          <Link href={`/profile/${userId}`}>MY PROFILE</Link>
        </li>
        <li className="m-2 hover:text-blue-200 inline font-bold">
          <Link href="/timeline">TIMELINE</Link>
        </li>
        {/* <li className="m-2 hover:text-white">
          <Link href="/friends">FRIENDS</Link>
        </li>
        <li className="m-2 hover:text-white">
          {userId ? <UserButton /> : <SignInButton />}
        </li> */}
      </ul>
    </div>
  );
}
