import React from "react";
import "./schedule.css";

const Schedule = () => {
  return (
    <div className="schedule-container">
      <h2>Book an Appointment</h2>
      <p>
        Choose a time that works for you. Your appointment will be added
        directly to our Google Calendar!
      </p>

      <iframe
        src="https://calendar.app.google/GoJTJW7rJupQJR468"
        style={{ border: "0", width: "100%", height: "900px" }}
        frameBorder="0"
        scrolling="no"
        title="Google Calendar Booking"
      ></iframe>
    </div>
  );
};

export default Schedule;
