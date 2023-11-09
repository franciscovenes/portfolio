import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_djzm0sd";
const TEMPLATE_ID = "template_rsf159m";
const PUBLIC_KEY = "wKopj_zqZaixgto8p";

export default function Contact() {
  const [contact, setContact] = useState({
    sender: "",
    email: "",
    subject: "",
    message: "",
    recipient: "Francisco",
  });

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  });

  function handleChange(e) {
    const value =
      e.target.name === "message" || e.target.name === "subject"
        ? e.target.value
        : e.target.value.replace(/[^a-z0-9\s@.\u00C0-\u017F]/gi, "");

    setContact((prevContact) => ({
      ...prevContact,
      [e.target.name]: value,
    }));
  }

  function submitMessage(e) {
    e.preventDefault();
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, contact)
      .then((res) => {
        console.log("Sent successfully", res.status, res.text);
      })
      .catch((error) => {
        console.log("Not Sent", error);
      })
      .finally(console.log("Form processed"));
  }
  return (
    <div id="contact" className="contact--container section--container">
      <h1 className="section--title">Contact</h1>
      <p className="summary">
        Feel free to contact me. I will get back at you as soon as possible 😊
      </p>
      <form onSubmit={submitMessage} className="contact--form">
        <label htmlFor="contact--form--name">Name: </label>
        <input
          id="contact--form--name"
          className="contact--form--name"
          type="text"
          value={contact.name}
          onChange={handleChange}
          name="sender"
          required
        ></input>
        <label htmlFor="contact--form--email">Email:</label>
        <input
          id="contact--form--email"
          className="contact--form--email"
          type="email"
          value={contact.email}
          onChange={handleChange}
          name="email"
          required
        ></input>
        <label htmlFor="contact--form--subject">Subject:</label>
        <input
          id="contact--form--subject"
          className="contact--form--subject"
          type="text"
          value={contact.subject}
          onChange={handleChange}
          name="subject"
          placeholder="Enter a subject..."
          required
        ></input>
        <label htmlFor="contact--form--message">Message:</label>
        <textarea
          id="contact--form--message"
          className="contact--form--message"
          placeholder="Enter you message..."
          onChange={handleChange}
          value={contact.message}
          name="message"
          required
        />
        <button className="animate--fade contact--form--btn">Send</button>
      </form>
    </div>
  );
}
