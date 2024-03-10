"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./EditProfile.css";

export default function EditProfile() {
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
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="first_name">
              First name
            </label>
            <input className="Input" id="first_name" defaultValue="" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="last_name">
              Last name
            </label>
            <input className="Input" id="last_name" defaultValue="" />
          </fieldset>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="gender">
              Gender
            </label>
            <input className="Input" id="gender" defaultValue="" />
          </fieldset>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="occupation">
              Occupation
            </label>
            <input className="Input" id="occupation" defaultValue="" />
          </fieldset>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="about">
              About
            </label>
            <textarea className="textarea" id="about" defaultValue="" />
          </fieldset>

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
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

// defaultValue="Profile bio"
