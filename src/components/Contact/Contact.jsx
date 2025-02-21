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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_suawm0s",
      "template_zldang8",
      form.current,
      "5fZg2XH9aUXBtyOP6"
    );
    e.target.reset();
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
            <div className="contact__info">
              <Skeleton type="text" height="30px" width="100%" count={1} />
              <Skeleton type="text" height="20px" width="80%" count={1} />
            </div>
            <div className="contact__info">
              <Skeleton type="text" height="30px" width="100%" count={1} />
              <Skeleton type="text" height="20px" width="80%" count={1} />
            </div>
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
          {/* Skeleton loader for the "Write me" title */}
          {loading ? (
            <Skeleton
              type="text"
              height="30px"
              width="150px"
              style={{ marginBottom: "20px" }}
            />
          ) : (
            <h3 className="contact__title">Write me</h3>
          )}

          {/* Form or skeleton for the form */}
          {loading ? (
            <Skeleton
              type="text"
              height="40px"
              width="100%"
              count={3}
              style={{ marginTop: "30px" }}
            />
          ) : (
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="John Doe"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="johndoe@example.com"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Message</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button className="button button--flex">
                Send Message
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
