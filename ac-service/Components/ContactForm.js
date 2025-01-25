import React from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaClock, FaComment } from 'react-icons/fa'; // Icons for inputs
import styles from '@/styles/ContactForm.module.css'; 

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <h2 className={styles.heading}>Leave Us a Message</h2>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <FaUser className={styles.icon} />
            <input type="text" placeholder="Name" className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <FaEnvelope className={styles.icon} />
            <input type="email" placeholder="Email Address" className={styles.input} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <FaPhoneAlt className={styles.icon} />
            <input type="text" placeholder="Phone" className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <FaClock className={styles.icon} />
            <input type="text" placeholder="Enter Timing" className={styles.input} />
          </div>
        </div>
        <select className={styles.select}>
          <option value="">-- Select Service --</option>
          <option value="service1">Window AC</option>
          <option value="service2">Split AC</option>
          <option value="service2">Cassette AC</option>
          <option value="service2">Ductin AC</option>
          <option value="service2">Refrigerator AC</option>
          <option value="service2">Tower AC</option>
          <option value="service2">De Fridge</option>
          <option value="service2">Copper Wire Fitting</option>



        </select>
        <textarea
          placeholder="Message"
          className={styles.textarea}
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
    <strong>Phone:</strong> <a href="tel:+91810954362">+91810954362</a>
  </p>
  <p>
    <strong>Landline:</strong> <a href="tel:+917011132581">+917011132581</a>
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
