import React from "react";
import styles from "@/styles/ServiceContainer.module.css";

const ServiceContainer = () => {
  const handleRequest = () => {
    alert("Service requested successfully!");
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
        <h2>Request a Service</h2>
        <p>
          Need assistance? Reach out to us for exceptional service and support. We are here to help you!
        </p>
        <button onClick={handleRequest} className={styles.button}>
          Request Now
        </button>
      </div>
    </div>
  );
};

export default ServiceContainer;
