import { useContext, useState } from "react";
import { ReferralContext } from "./ReferralContext";
import ReferralForm from "./ReferralForm";
import Skeleton from "../Skeleton";
import "./styles/referral.css";

const Referral = () => {
  const { referrals, addReferral } = useContext(ReferralContext);
  const [loading, setLoading] = useState(false);

  const handleRefer = async (referralData) => {
    setLoading(true);
    try {
      await addReferral(referralData);
      alert("✅ Referral added successfully!");
    } catch (error) {
      console.error("❌ Failed to add referral:", error);
      alert("Failed to add referral. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="referral-section">
      <div className="referral-message">
        <h2>
          Wouldn't it be great if your friends lived in your neighborhood?
        </h2>
        <p>
          Refer a friend today and get rewarded when they purchase a property!
        </p>
      </div>

      {loading ? (
        <Skeleton type="card" height="300px" width="100%" />
      ) : (
        <ReferralForm onRefer={handleRefer} />
      )}
    </div>
  );
};

export default Referral;
