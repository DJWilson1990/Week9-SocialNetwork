import { getProfile } from "@/utils/utils";
import Image from "next/image";
import React from "react";

export default async function ViewProfile({ profile }) {
  console.log("profile component" + profile);
  // const profileData = await getProfile();
  return (
    <div>
      {/* <Image src={profile.image_link} alt="profile picture" /> */}
      <p>{profile.first_name}</p>
      <p>{profile.last_name}</p>
      <p>{profile.email}</p>
      <p>{profile.gender}</p>
      <p>{profile.location}</p>
      <p>{profile.occupation}</p>
    </div>
  );
}
