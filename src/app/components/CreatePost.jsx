"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import "./RadixForm.css";

export default function CreatePost({ action, first_name, last_name }) {
  async function submitForm(event) {
    event.preventDefault();
    console.log(event);

    const formData = new FormData(event.target);
    console.log(formData);
    action(formData);
  }

  return (
    <Form.Root className="FormRoot" onSubmit={submitForm}>
      <Form.Field className="FormField" name="post">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Write post</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter a post
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea className="Textarea" required />
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
