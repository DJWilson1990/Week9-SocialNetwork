"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./EditProfile.css";
import { updateProfile } from "@/utils/actions";

export default function EditProfile({ profile }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet ml-10">Edit profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you are done.
          </Dialog.Description>
          <form action={updateProfile}>
            <input type="hidden" name="user_id" value={profile.id} />
            <input type="hidden" name="email" value={profile.email} />
            <input type="hidden" name="new_profile" value={false} />
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="first_name">
                First name
              </label>
              <input
                className="Input"
                id="first_name"
                name="first_name"
                defaultValue={profile.first_name}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="last_name">
                Last name
              </label>
              <input
                className="Input"
                id="last_name"
                name="last_name"
                defaultValue={profile.last_name}
              />
            </fieldset>

            <fieldset className="Fieldset">
              <label className="Label" htmlFor="gender">
                Gender
              </label>
              <input
                className="Input"
                id="gender"
                name="gender"
                defaultValue={profile.gender}
              />
            </fieldset>

            <fieldset className="Fieldset">
              <label className="Label" htmlFor="location">
                Location
              </label>
              <input
                className="Input"
                id="location"
                name="location"
                defaultValue={profile.location}
              />
            </fieldset>

            <fieldset className="Fieldset">
              <label className="Label" htmlFor="occupation">
                Occupation
              </label>
              <input
                className="Input"
                id="occupation"
                name="occupation"
                defaultValue={profile.occupation}
              />
            </fieldset>

            <fieldset className="Fieldset">
              <label className="Label" htmlFor="about">
                About
              </label>
              <textarea
                className="textarea"
                id="about"
                name="about"
                defaultValue={profile.about}
              />
            </fieldset>
            <button type="submit" className="Button green">
              Update profile
            </button>
          </form>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild></Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
