"use client";
import { useState } from "react";
import Button1 from "./Button1";
import { redirect, usePathname } from "next/navigation";

export default function Likes({ action, totalLikes, postId }) {
  let [count, setCount] = useState(totalLikes);
  const pathName = usePathname();
  console.log("????????" + pathName);

  async function incrementLikes() {
    setCount(Number(count) + 1);
    action(pathName);
    console.log("???!!!!!!!!!?????" + pathName);
  }

  return (
    <div>
      <Button1 caption="Like" action={incrementLikes} />
      <p>Likes: {count}</p>
    </div>
  );
}
