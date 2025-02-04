import React from "react";
import styles from "@/styles/AHU.module.css"; 

const ACServiceComponent = () => {
  return (
    <div className={styles.acServiceContainer}>
      <h1 className={styles.title}>AHU Air Conditioning System Maintenance Services in Gurgaon</h1>
      <p className={styles.description}>
        Welcome to AC Service Gurgaon, your trusted provider of AHU (Air Handling Unit) air conditioning system maintenance services in Gurgaon! With our professional expertise, we ensure your AHU systems operate efficiently, providing superior air quality and comfort for your space.
      </p>

      <section className={styles.whyChooseSection}>
        <h2>Why Choose AC Service Gurgaon for AHU Maintenance?</h2>
        <ul className={styles.whyChooseList}>
          <li>Expertise in AHU Systems</li>
          <li>Comprehensive Maintenance Solutions</li>
          <li>Quick and Reliable Service</li>
          <li>Affordable and Transparent Pricing</li>
        </ul>
      </section>

      <section className={styles.whatIsAHU}>
        <h2>What is an AHU System?</h2>
        <p>
          An Air Handling Unit (AHU) is a vital component of HVAC systems that circulates, filters, and conditions air. AHUs are commonly used in:
        </p>
        <ul className={styles.ahuApplications}>
          <li>Offices and commercial spaces</li>
          <li>Industrial facilities</li>
          <li>Hospitals and healthcare centers</li>
          <li>Residential complexes</li>
        </ul>
        <p>
          Proper maintenance of AHUs is crucial to ensure optimal performance, energy efficiency, and indoor air quality.
        </p>
      </section>

      <section className={styles.services}>
        <h2>Our AHU Maintenance Services</h2>
        <ul className={styles.servicesList}>
          <li>Routine Inspection</li>
          <li>Filter Cleaning and Replacement</li>
          <li>Coil Cleaning and Servicing</li>
          <li>Fan and Motor Servicing</li>
          <li>Duct Cleaning</li>
          <li>Electrical Component Check</li>
          <li>Refrigerant Level Check</li>
        </ul>
      </section>

      <section className={styles.benefits}>
        <h2>Why Regular AHU Maintenance Matters</h2>
        <ul className={styles.benefitsList}>
          <li>Improved Air Quality</li>
          <li>Energy Efficiency</li>
          <li>System Longevity</li>
          <li>Cost Savings</li>
        </ul>
      </section>
    </div>
  );
}

export default ACServiceComponent;
