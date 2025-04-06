
'use client';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

const Features = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (plan, price) => {
    addToCart({ plan, price, billingCycle });
    router.push('/order'); // optional redirect
  };  

  return (
    <div className="min-h-screen bg-cover bg-center px-4 pb-12 text-white">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold">
        Flexible <span className="text-yellow-500">Plans</span>
      </h1>
      <p className="text-lg mt-2">Choose a plan that works best for you & your team</p>

      <div className="mt-6 mx-auto w-fit bg-blue-950 p-3 rounded-full flex justify-center gap-4 shadow-md">
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
            billingCycle === 'monthly' ? 'bg-yellow-500 text-white' : 'bg-white text-black'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle('yearly')}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
            billingCycle === 'yearly' ? 'bg-yellow-500 text-white' : 'bg-white text-black'
          }`}
        >
          Yearly <span className="text-sm ml-1">(Save 60%)</span>
        </button>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {/* Standard Plan */}
      <div className=" bg-opacity-60 mt-5 p-6 rounded-md shadow-xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(147, 112, 219, 0.3) 0%, rgba(150, 150, 250, 0.3) 100%)",
          }}>
        <h2 className="text-2xl font-semibold mb-2">Standard</h2>
        <p className="text-sm text-gray-300 mb-2">
          Basic features for small teams or startups to get started.
        </p>
        <p className="text-3xl font-bold mb-1">$99</p>
        <p className="text-sm mb-4">Per Month</p>
        <ul className="text-center space-y-2 mb-6">
          <li>• Lorem ipsum</li>
          <li>• Lorem ipsum</li>
          <li>• Lorem ipsum</li>
          <li>• Lorem ipsum</li>
          <li>• Lorem ipsum</li>
        </ul>
        <button       onClick={() => handleAddToCart('Standard', billingCycle === 'monthly' ? 99 : 1000)}

          className="px-6 py-2 rounded-full font-semibold bg-blue-950">Choose Plan</button>
      </div>

      {/* Premium Plan */}
      <div className="  bg-opacity-60 p-6 rounded-md shadow-xl text-center mb-7 scale-105" 
        style={{
            background: "linear-gradient(135deg, rgba(147, 112, 219, 0.3) 0%, rgba(150, 150, 226, 0.3) 100%)",
          }}>
        <h2 className="text-2xl font-semibold mb-2">
          Premium <span className="text-sm text-yellow-400">(Recommended)</span>
        </h2>
        <p className="text-sm text-gray-300 mb-2">
          Everything in Standard, plus advanced tools for growing teams.
        </p>
        <p className="text-3xl font-bold mb-1">$299</p>
        <p className="text-sm mb-4">Per Month</p>
        <ul className="text-center space-y-2 mb-6">
          <li>• Lorem ipsum</li>
          <li>• Lorem ipsum</li>
          <li>• Lorem ipsum</li>
          <li>• Lorem ipsum</li>
          <li>• Lorem ipsum</li>
        </ul>
        <button  onClick={() => handleAddToCart('Premium', billingCycle === 'monthly' ? 299 : 1800)}  
        className="px-6 py-2 rounded-full font-semibold bg-yellow-500 text-black">
          Choose Plan
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className=" bg-opacity-60 p-6 rounded-md mt-5 shadow-xl text-center"
        style={{
            background: "linear-gradient(135deg, rgba(147, 112, 219, 0.3) 0%, rgba(150, 150, 226, 0.3) 100%)",
          }}>
        <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
        <p className="text-sm text-gray-300 mb-2">
          Tailored solutions for large teams and organizations with custom needs.
        </p>
        <p className="text-3xl font-bold mb-1">Custom Plan</p>
        <ul className="text-center space-y-2 mb-6 mt-6">
          <li>• Lorem ipsum</li>
          <li>• Lorem ipsum</li>
          <li>• Lorem ipsum</li>
          <li>• Lorem ipsum</li>
          <li>• Lorem ipsum</li>
        </ul>
        <button className="px-6 py-2 rounded-full  font-semibold  bg-blue-950">Contact Us</button>
      </div>
    </div>
  </div>
  );
};
export default Features;