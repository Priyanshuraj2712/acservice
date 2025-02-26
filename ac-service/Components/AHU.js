import React from "react";
import styles from "@/styles/AHU.module.css"; 
import Link from "next/link";

const ACServiceComponent = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
      <div className={styles.heroOverlay}>
      AHU Air Conditioning System Maintenance Services in Gurgaon
      <p>Welcome to AC Service Gurgaon, your trusted provider of Air Handling Unit air conditioning system maintenance.</p>
      </div>
    </div>
      <div className={styles.content}>
        <h2>Why Choose AC Service Gurgaon for AHU Maintenance?</h2>
        <ul>
          <li>Expertise in AHU Systems</li>
          <li>Comprehensive Maintenance Solutions</li>
          <li>Quick and Reliable Service</li>
          <li>Affordable and Transparent Pricing</li>
        </ul>
      
        <h2>What is an AHU System?</h2>
        <p>
         <strong>An Air Handling Unit (AHU) is a vital component of HVAC systems that circulates, filters, and conditions air. AHUs are commonly used in:</strong> 
        </p>
        <ul>
          <li>Offices and commercial spaces</li>
          <li>Industrial facilities</li>
          <li>Hospitals and healthcare centers</li>
          <li>Residential complexes</li>
        </ul>
        <p>
          Proper maintenance of AHUs is crucial to ensure optimal performance, energy efficiency, and indoor air quality.
        </p>

        <h2>Our AHU Maintenance Services</h2>
        <ul>
          <li>Routine Inspection</li>
          <li>Filter Cleaning and Replacement</li>
          <li>Coil Cleaning and Servicing</li>
          <li>Fan and Motor Servicing</li>
          <li>Duct Cleaning</li>
          <li>Electrical Component Check</li>
          <li>Refrigerant Level Check</li>
        </ul>

        <h2>Why Regular AHU Maintenance Matters</h2>
        <ul>
          <li>Improved Air Quality</li>
          <li>Energy Efficiency</li>
          <li>System Longevity</li>
          <li>Cost Savings</li>
        </ul>
      </div>
      <div className={styles.contactSection}>
        <p className={styles.tagline}>100% convenience with 0 hassle. That’s how we keep you free.</p>
        <div className={styles.buttonContainer}>
        <Link href="/contact-us" className={styles.contactButton}>
      Contact Now
    </Link>
          <a href="tel:+917011132581" className={styles.callButton}>Call Now</a>
        </div>
      </div>
    </div>
  );
}

export default ACServiceComponent;
