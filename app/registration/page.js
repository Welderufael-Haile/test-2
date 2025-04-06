import Image from "next/image";
import React from "react";

export default function RegistrationForm() {
  return (
    <div className="min-h-screen  bg-center flex items-center justify-center" >
      <div className="bg-gray-300 bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold">Set Up Your Office</h2>
          <div className="w-20 h-20 bg-blue-950 px-2 rounded-full mx-auto mb-4 flex items-center justify-center text-sm text-gray-600">
            <Image src={"/logo.png"} width={100} height={100} alt='logos'></Image>
            
          </div>
        </div>

        <form className="space-y-4">
          <label>Enter Your Name<strong className="text-red-500"> *</strong></label>
          <input type="text" placeholder="First & Last Name" className="w-full p-2  bg-white rounded-sm" required />

          <label>Enter Your Email<strong className="text-red-500"> *</strong></label>
          <input type="email" placeholder="Email Here" className="w-full p-2  bg-white rounded-sm" required />

          <label> Your Company Name<strong className="text-red-500"> *</strong></label>
          <input type="text" placeholder="Name Here" className="w-full p-2  bg-white rounded-sm" required />

          <label> Your Website Name<strong className="text-red-500"> *</strong></label>
          <input type="url" placeholder="Website Here" className="w-full p-2  bg-white rounded-sm" />

          <label>Company Size<strong className="text-red-500"> *</strong></label>
          <select className="w-full p-2  bg-white rounded-sm" required>
            <option value="">Choose Your Company Size</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201+">201+</option>
          </select>
          <label>Create Password<strong className="text-red-500"> *</strong></label>
          <input type="password" placeholder="Type Password" className="w-full p-2  bg-white rounded-sm" required />

          <label>Confirm Password<strong className="text-red-500"> *</strong></label>
          <input type="password" placeholder="Confirm Password" className="w-full p-2  bg-white rounded-sm" required />

          <button type="submit" className="w-full bg-blue-950 text-white p-2 rounded-sm font-semibold">Continue</button>
        </form>

        <div className="mt-4 text-sm text-center text-gray-600">
          <p>Terms & Conditions • Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}


