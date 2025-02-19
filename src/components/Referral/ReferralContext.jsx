import { createContext, useState } from "react";

// Create Context
export const ReferralContext = createContext();

// Provider Component
export const ReferralProvider = ({ children }) => {
  const [referrals, setReferrals] = useState([]);

  // Function to Add Referral
  const addReferral = (email) => {
    setReferrals((prevReferrals) => [
      ...prevReferrals,
      { email, status: "Pending" },
    ]);
  };

  return (
    <ReferralContext.Provider value={{ referrals, addReferral }}>
      {children}
    </ReferralContext.Provider>
  );
};
