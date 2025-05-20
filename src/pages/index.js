import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-black">
        Welcome to Next.js PWA
      </h1>
      <Link href="/Login" className="text-black underline ">
        Go to Login
      </Link>
    </div>
  );
}
