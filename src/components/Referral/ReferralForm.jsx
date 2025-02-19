import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/referralform.css";

const ReferralForm = () => {
  const [friendEmail, setFriendEmail] = useState("");
  const [referrerName, setReferrerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (friendEmail.trim() !== "" && referrerName.trim() !== "") {
      const templateParams = {
        to_email: friendEmail,
        from_name: referrerName,
      };

      emailjs
        .send(
          "service_suawm0s",
          "template_5aivm3p",
          templateParams,
          "5fZg2XH9aUXBtyOP6"
        )
        .then(
          (response) => {
            alert("Referral email sent successfully!");
            setFriendEmail("");
            setReferrerName(""); // Reset both fields
          },
          (error) => {
            console.error("Error sending email:", error);
          }
        );
    }
  };

  return (
    <div className="referral-form-container">
      <h3 className="referral-form-title">Refer a Friend</h3>
      <p className="referral-form-description">
        Enter your name and your friend's email below to send them a referral.
      </p>
      <form onSubmit={handleSubmit} className="referral-form">
        <input
          type="text"
          placeholder="Your Name"
          value={referrerName}
          onChange={(e) => setReferrerName(e.target.value)}
          className="referral-input"
          required
        />
        <input
          type="email"
          placeholder="Friend's email"
          value={friendEmail}
          onChange={(e) => setFriendEmail(e.target.value)}
          className="referral-input"
          required
        />
        <button type="submit" className="referral-submit-btn">
          Send Referral
        </button>
      </form>
    </div>
  );
};

export default ReferralForm;
