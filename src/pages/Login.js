import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake login simulation
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      router.push('/home'); // Redirect to home page
    }
  };

  return (
    <>
      <Head>
        <title>Login - PWA</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm transition-all duration-300 animate-fade-in">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome Back</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 active:scale-95 transition-transform"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
