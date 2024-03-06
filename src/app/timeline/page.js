//global timeline

import { UserButton } from "@clerk/nextjs";

export default async function Page() {
  return (
    <div>
      <h1>Timeline</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
