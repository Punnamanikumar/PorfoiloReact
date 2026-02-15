import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    setDone(false);
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^[0-9]{10}$/;
    const name = e.target.elements.name.value.trim();
    const email = e.target.elements.email.value.trim();
    const mobile = e.target.elements.mobile.value.trim();
    const message = e.target.elements.message.value.trim();

    const nameField = e.target.elements.name;
    if (!name || !nameRegex.test(name)) {
      return nameField.classList.add("error");
    } else nameField.classList.remove("error");

    const emailField = e.target.elements.email;
    if (!email || !emailRegex.test(email)) {
      return emailField.classList.add("error");
    } else emailField.classList.remove("error");

    const mobileField = e.target.elements.mobile;
    if (!mobile || !numberRegex.test(mobile)) {
      return mobileField.classList.add("error");
    } else mobileField.classList.remove("error");

    const messageField = e.target.elements.message;
    if (!message || message.length < 3) {
      return messageField.classList.add("error");
    } else messageField.classList.remove("error");

    setDisableButton(false);

    // Fallback function to send via webhook
    const sendViaWebhook = () => {
      const webhookUrl = process.env.REACT_APP_FALLBACK_WEBHOOK_URL;
      
      if (!webhookUrl) {
        console.error("Fallback webhook URL not configured");
        setDisableButton(true);
        return;
      }

      const formData = {
        name: name,
        email: email,
        mobile: mobile,
        message: message,
        cc: true
      };

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(formData)
      })
        .then(response => {
          if (response.ok) {
            console.log("Email sent via fallback webhook");
            setDisableButton(true);
            setDone(true);
            form.current.reset();
          } else {
            throw new Error("Webhook request failed");
          }
        })
        .catch(webhookError => {
          console.error("Fallback webhook also failed:", webhookError);
          setDisableButton(true);
          alert("Failed to send message. Please try again later or contact directly via email.");
        });
    };

    // Try EmailJS first
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("Email sent via EmailJS:", result.text);
          setDisableButton(true);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS failed:", error.text);
          console.log("Attempting fallback webhook...");
          // Try fallback webhook on EmailJS failure
          sendViaWebhook();
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span style={{ color: darkMode ? "#ccc" : "" }}>+91 72878 87575</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:punnamanikumar@gmail.com">punnamanikumar@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🔗</span>
              <a href="https://linkedin.com/in/punnamanikumar" target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💻</span>
              <a href="https://github.com/Punnamanikumar" target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
            </div>
          </div>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user" placeholder="Name" />
          <input type="email" name="email" className="user" placeholder="Email" />
          <input type="number" name="mobile" className="user" placeholder="Mobile Number" />
          <textarea name="message" className="user" placeholder="Message" />
          {disableButton ? (
            <input type="submit" value="Send" className="button" />
          ) : (
            "Sending Mail Please Wait ..."
          )}
          <span className="sucesstext">{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;