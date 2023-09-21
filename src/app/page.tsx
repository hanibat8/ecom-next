'use client'
import React, {useState } from 'react';
import { useAuth } from '@/context/authContext'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login}=useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if(email==='test@gmail.com' && password==='test124')
        login()
    console.log('Email:', email);
    console.log('Password:', password);
  };


  return (
    <div className="flex justify-center items-center h-screen ">
      <form className="bg-white p-6 rounded shadow-md md:w-[45%] w-3/4 " onSubmit={handleLogin}>
        <h2 className="text-3xl font-semibold mb-4 text-center mb-8">Welcome Back</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 font-semibold bg-cyan-500 text-white rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
