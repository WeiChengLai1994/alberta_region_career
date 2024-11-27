'use client';  // Add this line to mark the component as a client component

import { useState } from 'react';
import { db } from '../../../firebase/firebase';
import { collection, addDoc } from "firebase/firestore";

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'users'), { username, email, password });
            alert('Register Successfully！');
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error adding document:', error);
            alert('Error, please try again!');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-2xl font-bold mb-6">Register</h1>
            <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="border-2 border-gray-800 px-4 py-2 rounded focus:outline-none focus:border-green-500"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-2 border-gray-800 px-4 py-2 rounded focus:outline-none focus:border-green-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-2 border-gray-800 px-4 py-2 rounded focus:outline-none focus:border-green-500"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
