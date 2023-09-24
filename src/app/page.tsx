'use client'
import React, {useState } from 'react';
import { useAuth } from '@/context/authContext'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp,setIsSignUp]=useState(false)
  const { login}=useAuth();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername((e.target as HTMLInputElement).value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  
  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:4000/auth/register', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          username,
          password:password
        })});
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json(); 
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
    
  }

  const handleLogin=async ()=>{
    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          username,
          password
        })});
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json(); 
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    // if(email==='test@gmail.com' && password==='test124')
    //     login()

    if(isSignUp)
      handleSignUp()
    else
      handleLogin();

  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form className="bg-white p-6 rounded shadow-md md:w-[45%] w-3/4 " onSubmit={handleSubmit}>
        <h2 className="text-3xl font-semibold mb-4 text-center mb-8">
          {isSignUp? <span>Sign Up</span>
            :<span>Welcome Back</span>}
          
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
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
        {!isSignUp && <span className='cursor-pointer text-cyan-600' onClick={()=>setIsSignUp(true)}>Don't have an account? Sign up</span>}
        {isSignUp && <span className='cursor-pointer text-cyan-600' onClick={()=>setIsSignUp(false)}>Already have an account? Log in</span>}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 font-semibold bg-cyan-500 text-white rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-blue-600"
          >
            {isSignUp ? <span>Sign Up</span> : <span>Login</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
