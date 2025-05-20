// pages/home.jsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) router.push("/login");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <>
      <Head>
        <title>Home - PWA</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 p-6 flex flex-col items-center animate-slide-up">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">
          👋 Hello User!
        </h1>
        <p className="text-gray-600 mb-6 text-center">You are now logged in.</p>

        <div className="w-full max-w-sm space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">🔒 Secure</h2>
            <p className="text-sm text-gray-500">
              All your data is safe and encrypted.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">⚡ Fast</h2>
            <p className="text-sm text-gray-500">
              Experience smooth transitions and quick loading.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">📱 Works Offline</h2>
            <p className="text-sm text-gray-500">
              Try turning off the internet and reload!
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-10 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 active:scale-95 transition-transform"
        >
          Logout
        </button>
      </div>
    </>
  );
}
