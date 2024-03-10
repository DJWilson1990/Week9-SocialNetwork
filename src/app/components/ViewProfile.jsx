import { getProfile } from "@/utils/utils";
import Image from "next/image";
import React from "react";

export default async function ViewProfile({ profile }) {
  return (
    <div className="m-12">
      <Image
        src={profile.image_link ?? "https://placehold.co/100x100/png"}
        alt="profile picture"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="flex mt-4">
        <p className="mr-2">{profile.first_name}</p>
        <p>{profile.last_name}</p>
      </div>
      <p>{profile.email}</p>
      <p>{profile.gender}</p>
      <p>{profile.location}</p>
      <p>{profile.occupation}</p>
    </div>
  );
}
