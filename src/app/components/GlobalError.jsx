"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center border w-96 mx-auto my-auto">
          <h2 className="font-bold m-2">UH OH....Something went wrong</h2>
          <p>{error}</p>
          {/* <button onClick={() => reset()}>Try again</button> */}
          <Link href="/timeline" className="font-bold text-blue-800 m-2">
            Return to timeline!
          </Link>
        </div>
      </body>
    </html>
  );
}
