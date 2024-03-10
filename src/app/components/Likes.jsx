"use client";
import { useState } from "react";

import { redirect, usePathname } from "next/navigation";
import SubmitBtn from "./SubmitBtn";

export default function Likes({ action, totalLikes, postLiked }) {
  const [count, setCount] = useState(totalLikes);

  const [liked, setLiked] = useState(postLiked);

  const pathName = usePathname();
  console.log("????????" + pathName);

  async function incrementLikes() {
    const result = await action();
    if (result === true) {
      setCount(Number(count) + 1);
      setLiked(1);
    }
  }

  return (
    <div>
      <form
        action={incrementLikes}
        className="flex justify-between items-center mt-2"
      >
        {liked == false ? (
          <SubmitBtn defaultCaption="Like" pendingCaption="Liking..." />
        ) : (
          <p>Liked</p>
        )}

        <p className="mr-10">Likes: {count}</p>
      </form>
    </div>
  );
}
