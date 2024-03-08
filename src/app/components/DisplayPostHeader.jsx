import Image from "next/image";

export default function DisplayPostHeader({ userName, imgURL }) {
  return (
    <div>
      <Image
        src={profile.image_link ?? "https://placehold.co/20x20/png"}
        alt="profile picture"
        width={20}
        height={20}
      />
      <h3>{userName}</h3>
    </div>
  );
}
