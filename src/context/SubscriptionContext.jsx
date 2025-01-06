// src/context/SubscriptionContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the SubscriptionContext
const SubscriptionContext = createContext();

// Create a provider component
export const SubscriptionProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const choosePlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <SubscriptionContext.Provider value={{ selectedPlan, choosePlan }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

// Create a custom hook for using the subscription context
export const useSubscription = () => useContext(SubscriptionContext);
