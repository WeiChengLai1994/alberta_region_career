'use client';  // Mark this as a client-side component

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../../../firebase/firebase';
import Image from 'next/image'; // Add this import for Image component

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('You have logged in!');
            setEmail('');
            setPassword('');
        } catch (err) {
            console.error('Error logging in:', err);
            setError('Failed to login, please check your email or password!');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            
            {/* Image logo section */}
            <div className="mb-4">
            <Image
                src="/image/logo/ARClogo.jpg"  // Ensure the path is correct and no spaces in the filename
                alt="ARC Logo"
                width={200}  // Width property is already set
                height={100} // Height property is already set
                loading="eager"
                className="mb-4"
            />
            </div>

            {/* Login Form */}
            <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button 
                    type="submit" 
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    Login
                </button>
                
                {/* Error message display */}
                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            </form>
        </div>
    );
}
