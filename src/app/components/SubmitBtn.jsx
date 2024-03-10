"use client";

import { useFormStatus } from "react-dom";

export default function SubmitBtn({ defaultCaption, pendingCaption }) {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        disabled={pending}
        type="submit"
        className="m-4 p-2 border hover:text-white hover:bg-black"
      >
        {pending ? pendingCaption : defaultCaption}
      </button>
    </div>
  );
}
