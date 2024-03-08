import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default function Nav() {
  const { userId } = auth();

  return (
    <div className="flex flex-row bg-slate-500">
      <ul>
        <li className="m-2 hover:text-white">
          <Link href="/">HOME</Link>
        </li>
        <li className="m-2 hover:text-white">
          <Link href="/profile">PROFILE</Link>
        </li>
        <li className="m-2 hover:text-white">
          <Link href="/timeline">TIMELINE</Link>
        </li>
        <li className="m-2 hover:text-white">
          <Link href="/friends">FRIENDS</Link>
        </li>
        <li className="m-2 hover:text-white">
          {userId ? <UserButton /> : <SignInButton />}
        </li>
      </ul>
    </div>
  );
}
