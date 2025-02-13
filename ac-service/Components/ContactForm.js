import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaUser, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
import styles from "@/styles/ContactForm.module.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timing: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_539k4ug",
        "template_8fdzuhx",
        {
          from_name: formData.name,
          to_name: "AC Service Gurgaon",
          email: formData.email,
          phone: formData.phone,
          timings: formData.timing,
          service: formData.service,
          message: formData.message,
        },
        "V_RaldyQDJMOvR2nj"
      )
      .then(
        () => {
          alert("Your message has been sent!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            timing: "",
            service: "",
            message: "",
          });
        },
        () => {
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <div className={styles.contactPage}>
      <h2 className={styles.heading}>Leave Us a Message</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <FaEnvelope className={styles.icon} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <FaPhoneAlt className={styles.icon} />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className={styles.input}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <FaClock className={styles.icon} />
            <input
              type="text"
              name="timing"
              placeholder="Enter Timing"
              className={styles.input}
              value={formData.timing}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <select
          name="service"
          className={styles.select}
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Service --</option>
          <option value="Window AC">Window AC</option>
          <option value="Split AC">Split AC</option>
          <option value="Cassette AC">Cassette AC</option>
          <option value="Ducting AC">Ducting AC</option>
          <option value="Vrv/vrf AC">Vrv/vrf AC</option>
          <option value="Tower AC">Tower AC</option>
          <option value="Ahu/cfu AC">Ahu/cfu AC</option>
          <option value="Copper Wire Fitting">Copper Wire Fitting</option>
          <option value="Package AC">Package AC</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      <div className={styles.contactInfoBox}>
        <h2 className={styles.heading}>Contact Information</h2>
        <p>
          <strong>Address:</strong> 195/1 Lajpat Nagar, Gurgaon
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+91810954362">+91810954362</a>
        </p>
        <p>
          <strong>Landline:</strong>{" "}
          <a href="tel:+917011132581">+917011132581</a>
        </p>
        <p>
          <strong>Day:</strong> All 7 Days
        </p>
        <p>
          <strong>Business Hours:</strong> 8am - 10pm
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
