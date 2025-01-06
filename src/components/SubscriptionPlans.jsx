// src/components/SubscriptionPlans.jsx
import React from 'react';
import { useSubscription } from '../context/SubscriptionContext'; // Import the custom hook

const SubscriptionPlans = () => {
  const { choosePlan } = useSubscription();

  return (
    <div className="subscription-plans bg-gradient-to-r from-gray-800 via-gray-900 to-black py-8">
      <h2 className="text-4xl text-center text-white font-bold mb-6">Choose Your Subscription Plan</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Basic Plan Card */}
        <div className="plan bg-gray-800 text-white p-6 rounded-lg shadow-lg w-72 sm:w-80 md:w-96 transition transform hover:scale-105 hover:shadow-xl duration-300">
          <img src="https://i.ibb.co/GWqV8RZ/youtube-premium8029-logowik-com.webp" alt="Basic Plan" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Basic Plan</h3>
          <p className="text-gray-300 mb-4">Get basic access to all movies with limited features. Perfect for casual movie lovers.</p>
        </div>

        {/* Premium Plan Card */}
        <div className="plan bg-gray-800 text-white p-6 rounded-lg shadow-lg w-72 sm:w-80 md:w-96 transition transform hover:scale-105 hover:shadow-xl duration-300">
          <img src="https://i.ibb.co/ZKcyh3b/images.png" alt="Premium Plan" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Premium Plan</h3>
          <p className="text-gray-300 mb-4">Enjoy premium access with extra features like ad-free experience, HD quality, and early releases.</p>
        </div>

        {/* Ultimate Plan Card */}
        <div className="plan bg-gray-800 text-white p-6 rounded-lg shadow-lg w-72 sm:w-80 md:w-96 transition transform hover:scale-105 hover:shadow-xl duration-300">
          <img src="https://i.ibb.co/d23bYmk/05c-It-XL96l4-LE9n02-Wf-DR0h-5.webp" alt="Ultimate Plan" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Ultimate Plan</h3>
          <p className="text-gray-300 mb-4">Unlimited access to all features with exclusive perks, including access to VIP events and content.</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
