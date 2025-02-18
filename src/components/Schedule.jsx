import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const googleCalendarURL = "https://calendar.app.google/GoJTJW7rJupQJR468";

    // Open in a new tab
    const newTab = window.open(googleCalendarURL, "_blank");

    // Handle pop-up blocking
    if (!newTab) {
      alert("Popup blocked! Click the link to schedule: " + googleCalendarURL);
    }

    // Redirect back after 1 second
    setTimeout(() => navigate("/"), 1000);
  }, [navigate]);

  return (
    <div>
      <h2>Redirecting to Google Calendar...</h2>
      <p>
        If not redirected,{" "}
        <a
          href="https://calendar.app.google/GoJTJW7rJupQJR468"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </a>
        .
      </p>
    </div>
  );
};

export default Schedule;
