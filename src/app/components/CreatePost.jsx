"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import "./RadixForm.css";
import { useFormStatus } from "react-dom";

export default function CreatePost({ action, user_id }) {
  const { pending } = useFormStatus();

  async function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    action(formData);
  }

  return (
    <Form.Root className="FormRoot mx-auto" onSubmit={submitForm}>
      <input type="hidden" name="user_id" value={user_id} />
      <Form.Field className="FormField" name="content">
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
        <button
          disabled={pending}
          type="submit"
          className="Button"
          style={{ marginTop: 10 }}
        >
          {pending ? "Saving post..." : "Save"}
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
