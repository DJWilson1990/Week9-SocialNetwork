import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center border w-96 mx-auto my-auto">
      <h2 className="font-bold m-2">Sorry, No user found!</h2>
      <p className="m-2 text-center">
        Could not find requested user...are you sure they exist?
      </p>
      <Link href="/timeline" className="font-bold text-blue-800 m-2">
        Return to timeline
      </Link>
    </div>
  );
}
