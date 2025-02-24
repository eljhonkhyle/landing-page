import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import Skeleton from "../Skeleton";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);
    setError("");

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setIsSending(false);
      return;
    }

    emailjs
      .sendForm(
        "service_suawm0s",
        "template_zldang8",
        form.current,
        "5fZg2XH9aUXBtyOP6"
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch(() => {
        setError("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setSuccess(false), 5000);
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <p className="section__subtitle">
        We’d love to hear from you! Whether you have questions, need more
        details, or want to schedule a visit, we’re here to help. Reach out to
        us through the contact details below, and we’ll get back to you as soon
        as possible.
      </p>

      <div className="contact__container">
        {loading ? (
          <div className="contact__content">
            {[...Array(2)].map((_, index) => (
              <div className="contact__card" key={index}>
                <Skeleton height="60px" width="60px" borderRadius="50%" />
                <Skeleton
                  height="20px"
                  width="50%"
                  style={{ margin: "10px 0" }}
                />
                <Skeleton height="15px" width="80%" />
                <Skeleton
                  height="30px"
                  width="100px"
                  style={{ marginTop: "10px" }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="contact__content">
            <div className="contact__info">
              <div className="contact__card">
                <div className="contact__card-icon">
                  <MdMail />
                </div>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">
                  management@havoc-properties-tx.com
                </span>
                <a
                  href="mailto:management@havoc-properties-tx.com"
                  className="contact__button"
                >
                  Write me{" "}
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <div className="contact__card-icon">
                  <FaPhone />
                </div>
                <h3 className="contact__card-title">Phone</h3>
                <span className="contact__card-data">(830) 521-6927</span>
                <a href="tel:(830) 521-6927" className="contact__button">
                  Call me{" "}
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="contact__content">
          {loading ? (
            <div className="contact__form">
              <Skeleton
                height="40px"
                width="100%"
                style={{ marginBottom: "10px" }}
              />
              <Skeleton
                height="40px"
                width="100%"
                style={{ marginBottom: "10px" }}
              />
              <Skeleton
                height="100px"
                width="100%"
                style={{ marginBottom: "10px" }}
              />
              <Skeleton height="40px" width="150px" />
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              {error && <p className="error-message">{error}</p>}
              {success && (
                <p className="success-message">Message sent successfully!</p>
              )}

              <div className="contact__form-div">
                <label className="contact__form-tag" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="contact__form-input"
                  placeholder="John Doe"
                  aria-label="Your name"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="contact__form-input"
                  placeholder="johndoe@example.com"
                  aria-label="Your email"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Your message"
                  aria-label="Your message"
                ></textarea>
              </div>

              <button
                className="button button--flex"
                disabled={isSending}
                aria-label="Send message"
              >
                {isSending ? "Sending..." : "Send Message"}
                <IoIosSend />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
