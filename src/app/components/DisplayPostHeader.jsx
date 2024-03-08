import Image from "next/image";
import Link from "next/link";

export default function DisplayPostHeader({ userName, imgURL, userId }) {
  return (
    <div>
      <Image
        src={imgURL ?? "https://placehold.co/20x20/png"}
        alt="profile picture"
        width={20}
        height={20}
      />
      <Link href={`/profile/${userId}`}>{userName}</Link>
    </div>
  );
}
