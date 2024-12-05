'use client';  // Mark this as a client-side component

import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '/firebase/firebase'; // Ensure the correct import path for Firebase auth
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import Image from 'next/image'; // Import Image from next/image

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Use Next.js useRouter for navigation

  // Handle password reset request
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Please check your inbox.');
      setError(''); // Reset error message if successful
    } catch (err) {
      console.error('Error sending password reset email:', err);
      setError('Error sending password reset email. Please try again.');
      setMessage(''); // Reset success message if error occurs
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white p-4 flex items-center">
        <div className="flex-shrink-0">
          {/* Add width and height for image optimization */}
          <Image
            src="/image/logo/ARClogo.jpg"
            alt="ARC Logo"
            width={100}
            height={50}
            loading="eager"
            className="mb-4"
          />
        </div>
      </header>

      {/* Main content */}
      <div className="flex min-h-screen">
        <div className="w-full bg-white flex flex-col items-center justify-center p-8">
          <h2 className="text-custom-green-dark text-2xl font-semibold mb-6">Reset Your Password</h2>

          {/* Password reset form */}
          <form className="w-full max-w-sm flex flex-col gap-4 mb-6" onSubmit={handlePasswordReset}>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#325F66]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-[#325F66] text-white px-4 py-2 hover:bg-[#26494f] mt-6 rounded-3xl"
            >
              Send Reset Link
            </button>
          </form>

          {/* Display success or error messages */}
          {message && <div className="text-green-500 mt-2">{message}</div>}
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
      </div>
    </div>
  );
}
