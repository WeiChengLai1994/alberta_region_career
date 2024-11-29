'use client';  // Add this at the top of your file to mark it as a client-side component

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase'; // Make sure you have the auth object exported from your firebase config file


export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    console.log("Sign-in button clicked"); // Log to see if the function is triggered
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful"); // Log after successful login
      // Redirect using Link-style logic
      window.location.href = "/pages/dashboard/employer";
    } catch (err) {
      console.error("Error:", err); // Log the full error object
      setError("Login failed. Please check your email and password.");
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white p-4 flex items-center">
        <div className="flex-shrink-0">
          <img src="/image/logo/ARC_logo_v2 1.jpg" alt="Logo" className="h-16" />
        </div>
      </header>

      {/* Main content */}
      <div className="flex min-h-screen">
        <div className="w-1/2 bg-[#325F66] flex items-center justify-center p-8">
          <h1 className="text-white text-3xl font-bold">Welcome to the Alberta Region Career</h1>
        </div>

        <div className="w-1/2 bg-white flex flex-col items-center justify-center p-8">
          <h2 className="text-custom-green-dark text-2xl font-semibold mb-6">Welcome Back</h2>

          {/* Sign In Form */}
          <div className="w-full max-w-sm flex flex-col gap-4 mb-6">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#325F66]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <div className="relative w-full">
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#325F66]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a
                href="/forgot-password"
                className="text-sm text-[#325F66] hover:underline absolute right-0 top-full mt-1"
              >
                Forgot password?
              </a>
            </div>
            <button
              onClick={handleLogin}
              className="bg-[#325F66] text-white px-4 py-2 hover:bg-[#26494f] mt-6 rounded-3xl"
            >
              Sign In
            </button>

         

            {error && <div className="text-red-500 mt-2">{error}</div>}

            {/* Social Login Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              {/* Add social login buttons */}
            </div>
            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <span className="text-gray-500 text-sm">
                Don't have an account?{" "}
                <a href="/pages/register" className="text-[#325F66] font-semibold hover:underline">
                  Sign Up
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
