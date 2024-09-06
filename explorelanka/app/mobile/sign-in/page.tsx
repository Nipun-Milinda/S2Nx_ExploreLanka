'use client';

import React, { useState } from 'react';

const SignInPage: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-center mb-4">
          Welcome to <br /> ExploreLanka
        </h1>
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setIsSignIn(true)}
            className={`text-2xl font-bold ${
              isSignIn ? 'text-indigo-600' : 'text-gray-600'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`text-2xl font-bold ${
              !isSignIn ? 'text-indigo-600' : 'text-gray-600'
            }`}
          >
            Sign Up
          </button>
        </div>
        {isSignIn ? (
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Sign In
            </button>
            <div className="space-y-4 mt-4">
              <button className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700">
                Sign in with Google
              </button>
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Sign in with Facebook
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Sign Up
            </button>
            <div className="space-y-4 mt-4">
              <button className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700">
                Sign up with Google
              </button>
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Sign up with Facebook
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
