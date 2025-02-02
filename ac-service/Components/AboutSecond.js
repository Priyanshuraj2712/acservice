import React from "react";
import styles from "@/styles/About2.module.css";

const WhyChooseUs = () => {
  return (
    <div className={styles.whyChooseContainer}>
      <h2 className={styles.heading}>Why Choose Us?</h2>
      <p className={styles.description}>
        We stand out in the industry because of our commitment to excellence and customer satisfaction. 
        Here’s why you should trust us with your AC and appliance repair needs:
      </p>

      <div className={styles.featuresGrid}>
        <div className={styles.featureCard}>
          <img src="/images/experience.png" alt="Experience" className={styles.icon} />
          <h3 className={styles.cardTitle}>Years of Experience</h3>
          <p className={styles.cardText}>Our experts have years of experience in AC and appliance repair.</p>
        </div>

        <div className={styles.featureCard}>
          <img src="/images/quality.png" alt="Quality Service" className={styles.icon} />
          <h3 className={styles.cardTitle}>Quality Service</h3>
          <p className={styles.cardText}>We guarantee high-quality repairs with long-lasting results.</p>
        </div>

        <div className={styles.featureCard}>
          <img src="/images/support.png" alt="24/7 Support" className={styles.icon} />
          <h3 className={styles.cardTitle}>24/7 Support</h3>
          <p className={styles.cardText}>Emergency services available anytime you need us.</p>
        </div>

        <div className={styles.featureCard}>
          <img src="/images/pricing.png" alt="Affordable Pricing" className={styles.icon} />
          <h3 className={styles.cardTitle}>Affordable Pricing</h3>
          <p className={styles.cardText}>Get top-notch service at the most competitive prices.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
