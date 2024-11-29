'use client';  // Add this line to mark the component as a client component

import { useState } from 'react';
import { db } from '../../../firebase/firebase'; // Import Firestore configuration
import { collection, addDoc } from "firebase/firestore";

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password confirmation check
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      setSuccess('');
      return;
    }

    // Password length check
    if (password.length < 8) {
      setError('Password must be at least 8 characters long!');
      setSuccess('');
      return;
    }

    try {
      await addDoc(collection(db, 'users'), { firstName, lastName, email, password });
      setSuccess('Registration Successful!');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
    } catch (error) {
      console.error('Error adding document:', error);
      setError('Error occurred. Please try again!');
      setSuccess('');
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
          <h1 className="text-white text-3xl font-bold">Join Alberta Region Career</h1>
        </div>

        <div className="w-1/2 bg-white flex flex-col items-center justify-center p-8">
          <h2 className="text-custom-green-dark text-2xl font-semibold mb-6">Create Your Account</h2>

          {/* Registration Form */}
          <form className="w-full max-w-sm flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#325F66]"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#325F66]"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#325F66]"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#325F66]"
            />
            {/* Password Length Reminder */}
            <p className="text-xs text-gray-500 mt-0.5">Password must be at least 8 characters long.</p>

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#325F66]"
            />
            <button
              type="submit"
              className="bg-[#325F66] text-white px-4 py-2 hover:bg-[#26494f] mt-6 rounded-3xl"
            >
              Register
            </button>
          </form>

          {/* Success/Error Messages */}
          {success && <div className="text-green-500 mt-2">{success}</div>}
          {error && <div className="text-red-500 mt-2">{error}</div>}

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <span className="text-gray-500 text-sm">
              Already have an account?{" "}
              <a href="/" className="text-[#325F66] font-semibold hover:underline">
                Sign In
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
