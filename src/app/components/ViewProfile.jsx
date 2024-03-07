import { getProfile } from "@/utils/utils";
import Image from "next/image";
import React from "react";

export default async function ViewProfile() {
  const profileData = await getProfile();
  return (
    <div>
      {profileData.map((profile) => (
        <div key={profile.id}>
          <Image src={profile.image_link} alt="profile picture" />
          <p>{profile.first_name}</p>
          <p>{profile.last_name}</p>
          <p>{profile.email}</p>
          <p>{profile.gender}</p>
          <p>{profile.location}</p>
          <p>{profile.occupation}</p>
        </div>
      ))}
    </div>
  );
}
