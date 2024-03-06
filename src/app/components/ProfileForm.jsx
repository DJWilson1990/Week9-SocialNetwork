"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
// import "./styles.css";
import "./ProfileForm.css";

export default function ProfileForm({ action, user_id, email, new_profile }) {
  //space
  async function submitForm(event) {
    event.preventDefault();
    console.log(event);

    const formData = new FormData(event.target);
    console.log(formData);
    action(formData);
  }

  console.log(user_id, email, new_profile);
  return (
    <Form.Root className="FormRoot" onSubmit={submitForm}>
      <input type="hidden" name="user_id" value={user_id} />
      <input type="hidden" name="email" value={email} />
      <input type="hidden" name="new_profile" value={new_profile} />
      <Form.Field className="FormField" name="first_name">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">First name</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your first name
          </Form.Message>
          {/* <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message> */}
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="last_name">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Last name</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your last name
          </Form.Message>
          {/* <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message> */}
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="gender">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Gender</Form.Label>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="location">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Location</Form.Label>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="occupation">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Occupation</Form.Label>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }}>
          Save
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
