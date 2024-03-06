//edit profile.

import { currentUser, auth } from "@clerk/nextjs";
import ProfileForm from "../components/ProfileForm";
import { getProfile, saveProfile } from "@/utils/utils";

export default async function Page() {
  let newProfile = true;
  let emailAddress;

  const { userId } = auth();
  console.log(userId);
  if (userId) {
    console.log(userId);
    const user = await currentUser();
    emailAddress = user.emailAddresses[0].emailAddress;
    const profile = await getProfile(userId);
    if (profile) {
      newProfile = false;
    }
  }

  async function updateProfile(formData) {
    "use server";

    saveProfile({ formData, newProfile });
  }

  return (
    <div>
      <p>This is the edit profile page!</p>
      <ProfileForm
        action={updateProfile}
        user_id={userId}
        email={emailAddress}
        new_profile={newProfile}
      />
    </div>
  );
}
