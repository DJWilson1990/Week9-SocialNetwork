"use client";

import "@radix-ui/themes/styles.css";
import { Theme, Button } from "@radix-ui/themes";

export default function Button1({ caption, action }) {
  async function handleClick() {
    action();
  }

  return (
    <Theme>
      <Button variant="surface" highContrast onClick={handleClick}>
        {caption}
      </Button>
    </Theme>
  );
}
