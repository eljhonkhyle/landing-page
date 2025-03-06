import { useState } from "react";
import emailjs from "@emailjs/browser";
import Skeleton from "../Skeleton";
import { toast } from "sonner";
import "./styles/referralform.css";

const ReferralForm = () => {
  const [referralEmail, setReferralEmail] = useState("");
  const [referrerName, setReferrerName] = useState("");
  const [referralName, setReferralName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      referrer_name: referrerName,
      referral_email: referralEmail,
      referral_name: referralName,
    };

    emailjs
      .send(
        "service_suawm0s",
        "template_5aivm3p",
        templateParams,
        "5fZg2XH9aUXBtyOP6"
      )
      .then(() => {
        toast.success("Referral email sent successfully!");
        setReferrerName("");
        setReferralName("");
        setReferralEmail("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send referral. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="referral-form-container">
      <h3 className="referral-form-title">Refer a Friend</h3>
      <p className="referral-form-description">
        Enter your name and your friend's email below to send them a referral.
      </p>
      <form onSubmit={handleSubmit} className="referral-form">
        {loading ? (
          <Skeleton type="input" height="40px" />
        ) : (
          <input
            type="text"
            placeholder="Your Name"
            value={referrerName}
            onChange={(e) => setReferrerName(e.target.value)}
            className="referral-input"
            required
          />
        )}

        <div className="referral-info">
          {loading ? (
            <>
              <Skeleton type="input" height="40px" />
              <Skeleton type="input" height="40px" />
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Friend's Name"
                value={referralName}
                onChange={(e) => setReferralName(e.target.value)}
                className="referral-input"
                required
              />
              <input
                type="email"
                placeholder="Friend's Email"
                value={referralEmail}
                onChange={(e) => setReferralEmail(e.target.value)}
                className="referral-input"
                required
              />
            </>
          )}
        </div>

        {loading ? (
          <Skeleton type="button" height="45px" width="100%" />
        ) : (
          <button
            type="submit"
            className="referral-submit-btn"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Referral"}
          </button>
        )}
      </form>
    </div>
  );
};

export default ReferralForm;
