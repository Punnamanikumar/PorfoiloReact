import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const [disableButton, setDisableButton] = useState(true)
  const sendEmail = (e) => {
    e.preventDefault();
    setDone(false)
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^[0-9]{10}$/;
    const name = e.target.elements.user_name.value.trim();
    const email = e.target.elements.user_email.value.trim();
    const number = e.target.elements.user_number.value.trim();
    const message = e.target.elements.message.value.trim();
    // Validate the name field
    const nameField = e.target.elements.user_name;
    if (!name || !nameRegex.test(name)) {
      return nameField.classList.add("error");
    } else nameField.classList.remove("error");
    // Validate the Email field
    const emailField = e.target.elements.user_email;
    if (!email || !emailRegex.test(email)) {
      return emailField.classList.add("error");
    } else emailField.classList.remove("error");
    // Validate the number field
    const numberField = e.target.elements.user_number;
    if (!number || !numberRegex.test(number)) {
      return numberField.classList.add("error");
    } else numberField.classList.remove("error");
    const messageField = e.target.elements.message;
    if (!message || message.length < 3) {
      return messageField.classList.add("error");
    } else messageField.classList.remove("error");
    setDisableButton(false)
    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          setDisableButton(true);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          setDisableButton(true);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <input type="number" name="user_number" className="user" placeholder="Mobile Number" />
          <textarea name="message" className="user" placeholder="Message" />
          {disableButton ? <input type="submit" value="Send" className="button" /> : "Sending Mail Please Wait ..."}
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