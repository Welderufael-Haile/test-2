import Link from "next/link";
import React from "react";

export default function LoginForm() {
    
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" >
      <div className="bg-gray-300 bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold">Welcome Back</h2>
        </div>

        <form className="space-y-4">
        <label>Enter Your Name<strong className="text-red-500"> *</strong></label>
          <input type="email" placeholder="Email Here" className="w-full p-3 border bg-white border-gray-300 rounded-lg" required />
          
          <label>Enter Your Name<strong className="text-red-500"> *</strong></label>
          <input type="password" placeholder="Type Password" className="w-full p-3 border bg-white border-gray-300 rounded-lg" required />
          <div className="text-right text-sm text-blue-700 hover:underline cursor-pointer">
            Forgot Password?
          </div>
          <button type="submit" className="w-full bg-blue-800 text-white p-3 rounded-lg font-semibold">Continue</button>
        </form>

        <div className="mt-4 text-xs text-center text-gray-600">
          <p>
            By proceeding you are agreeing to the
            <a href="#" className="text-blue-700 underline"> Terms & Conditions </a>
            and
            <a href="#" className="text-blue-700 underline"> Privacy Policy</a>
          </p>
        </div>

        <div className="mt-4 text-sm text-center text-gray-600">
          <p>
            Do&apos;t have an account? 
            <Link href="/registration" className="text-blue-700 underline ml-1">Register now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

