import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const AuthPopup = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Switch between Sign In and Sign Up
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here (Sign In or Sign Up based on `isSignUp`)
    console.log(formData);
  };

  const handleGoogleSignIn = () => {
    // Integrate Google Sign-In logic here
    console.log("Google Sign-In triggered");
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50 ${
        isOpen ? 'visible' : 'hidden'
      }`}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-4 text-[#333] text-lg right-4 hover:text-gray-600"
          onClick={()=>onClose = true}
        >
          <IoClose />
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            {isSignUp ? 'Create an Account' : 'Welcome Back'}
          </h2>
          <p className="text-gray-500 mb-6">
            {isSignUp ? 'Sign up to get started!' : 'Sign in to continue'}
          </p>
        </div>
        
        {/* Google Sign-In Button */}
        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center gap-2 w-full px-4 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200 ease-in-out mb-4 shadow-md"
        >
          <FaGoogle className="text-lg" /> Continue with Google
        </button>

        {/* Separator */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-4 text-gray-500 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Auth Form */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-gray-600 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-[#4ED493] focus:border-[#4ED493]"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-600 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-[#4ED493] focus:border-[#4ED493]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-[#4ED493] focus:border-[#4ED493]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#4ED493] text-white rounded-md hover:bg-[#45b786] transition duration-200 ease-in-out"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {/* Toggle Sign Up/Sign In */}
        <p className="mt-4 text-center text-gray-500 text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-[#4ED493] font-semibold hover:underline"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPopup;
