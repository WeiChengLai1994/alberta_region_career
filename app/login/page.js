"use client";  // Add this line at the top

import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth"; 
import {auth} from '../../firebase/firebase';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('You have logged in！');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Fail, please check your email or password!');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Login</button>
            </form>
        </div>
    );
}
