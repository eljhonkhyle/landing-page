import React, { useState, useEffect } from "react";
import Skeleton from "../Skeleton";
import "./schedule.css";

const Schedule = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="schedule-container">
      {loading ? (
        <>
          <Skeleton
            width="300px"
            height="40px"
            style={{ margin: "0 auto 16px" }}
          />
          <Skeleton
            width="80%"
            height="20px"
            style={{ margin: "0 auto 24px" }}
          />
          <Skeleton width="100%" height="900px" />
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Schedule;
