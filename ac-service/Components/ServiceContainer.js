import React from "react";
import styles from "@/styles/ServiceContainer.module.css";
import { FaWhatsapp } from "react-icons/fa";

const ServiceContainer = () => {
  const handleRequest = (e) => {
    e.preventDefault();
    window.location.href = "/contact-us";
  };

  return (
    <div className={styles.container}>
      {/* Image Section */}
      <div className={styles.imageSection}>
        <img
          src="service.webp"
          alt="Service Illustration"
          className={styles.fullImage}
        />
      </div>

      {/* Text Section */}
      <div className={styles.textSection}>
        <h2>Need Assistance? We’re Here for You!</h2>
        <p>
          At AC Service Gurgaon, we pride ourselves on delivering exceptional service and support. Whether you have questions, need guidance, or require help with a specific issue, our dedicated team is ready to assist you.
        </p>
        <p>
          Let us know how we can help. Your satisfaction is our success!
        </p>

        {/* Button Container */}
        <div className={styles.buttonContainer}>
          <button onClick={handleRequest} className={styles.button}>
            Request Now
          </button>
          <a
            href="https://wa.me/919810954362"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
