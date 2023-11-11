import React from 'react';

interface Plan {
  name: string;
  features: string[];
  price: string;
}

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg mx-4">
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold text-gray-900">{plan.name}</h2>
        <p className="text-xl text-gray-500 mt-4">${plan.price}/mo</p>
        <ul className="mt-4 text-gray-600">
          {plan.features.map((feature, index) => (
            <li key={index} className="mt-2">
              <span className="text-green-500 mr-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 border-t border-gray-200">
        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Sign Up</button>
      </div>
    </div>
  );
};

export default PricingCard;