import Image from "next/image";
import Link from "next/link";

export default function DisplayPostHeader({ userName, imgURL, userId }) {
  return (
    <div className="flex items-center">
      <Image
        src={imgURL ?? "https://placehold.co/40x40/png"}
        alt="profile picture"
        width={40}
        height={40}
        className="rounded-full mb-2"
      />
      <Link href={`/profile/${userId}`} className="font-bold mb-2 ml-2">
        {userName}
      </Link>
    </div>
  );
}
