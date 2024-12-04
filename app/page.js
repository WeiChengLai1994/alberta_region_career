"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/firebase/firebase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/pages/dashboard/employer');
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to login. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white p-4">
        <div className="mb-4">
          <Image
            src="/image/logo/ARC_logo_v2 1.jpg"
            alt="ARC Logo"
            width={100}
            height={50}
            loading="eager"
            className="mb-4"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Section */}
        <div className="w-1/2 bg-[#325F66] p-12 flex flex-col">
          <h1 className="text-4xl text-white font-bold mb-6">
            Welcome to ARC!
          </h1>
          <p className="text-white text-lg">
            Our innovative hybrid model combines traditional job fair elements
            with modern technology to revolutionize hiring. Through strategic
            partnerships and data-driven insights, we're shaping a sustainable
            future for employment in Alberta.
          </p>

          {/* Graph Illustration */}
          <div className="mt-8">
            <div className="">
              <div className="mb-4">
                <Image
                  src="/login-image.png"
                  alt="ARC Logo"
                  width={500}
                  height={250}
                  priority
                  className="mb-4"
                />
              </div>
            </div>
          </div>
        </div>

<<<<<<< Updated upstream
        {/* Right Section */}
        <div className="w-1/2 p-12 flex flex-col justify-center items-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-[#325F66] mb-8">
              Welcome back!
            </h2>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-gray-600 mb-2">User Name</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#325F66]"
                  placeholder="Enter User Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#325F66]"
                  placeholder="Enter Password"
                  required
                />
                <div className="text-right mt-2">
                  <Link
                    href="/pages/forgot-password"
                    className="text-gray-500 hover:text-[#325F66] text-sm"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}

              <button
                type="submit"
                className="w-full bg-[#325F66] text-white py-3 rounded-md hover:bg-[#264a51] transition-colors"
              >
                Sign In
              </button>

              <div className="relative flex items-center justify-center mt-6">
                <hr className="w-full border-gray-300" />
                <span className="absolute bg-white px-4 text-sm text-gray-500">
                  or do it via other accounts
                </span>
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                <button
                  type="button"
                  className="p-2 rounded-full border hover:bg-gray-50"
                >
                  <Image
                    src="/icons/google.png"
                    alt="Google"
                    width={24}
                    height={24}
                  />
                </button>
                <button
                  type="button"
                  className="p-2 rounded-full border hover:bg-gray-50"
                >
                  <Image
                    src="/icons/apple-logo.png"
                    alt="Apple"
                    width={24}
                    height={24}
                  />
                </button>
                <button
                  type="button"
                  className="p-2 rounded-full border hover:bg-gray-50"
                >
                  <Image
                    src="/icons/facebook.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </button>
              </div>

              <div className="text-center mt-6">
                <span className="text-gray-500">
                  Don't have an account?{" "}
                  <Link
                    href="/pages/register"
                    className="text-[#325F66] font-semibold hover:underline"
                  >
                    Sign Up
                  </Link>
                </span>
              </div>
            </form>
=======
        {/* Right half with white background and buttons */}
        <div className="w-1/2 bg-white flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-semibold mb-6">Please choose an option to continue:</h2>
          <div className="flex flex-col gap-4">
            <Link href="/EmployerLogin" className="bg-[#325F66] text-white px-4 py-2 rounded hover:bg-[#26494f]">
              Employer Login
            </Link>
            <Link href="/JobSeekerLogin" className="bg-[#325F66] text-white px-4 py-2 rounded hover:bg-[#26494f]">
              Job Seeker Login
            </Link>
            <Link href="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Register for an Account
            </Link>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </div>
  );
}
