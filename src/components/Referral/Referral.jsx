import { useContext } from "react";
import { ReferralContext } from "./ReferralContext";
import ReferralForm from "./ReferralForm";
import "./styles/referral.css";

const Referral = () => {
  const { referrals, addReferral } = useContext(ReferralContext);

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

      <ReferralForm onRefer={addReferral} />
    </div>
  );
};

export default Referral;
