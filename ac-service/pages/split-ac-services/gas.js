import React from "react";
import styles from "@/styles/Install.module.css"; 
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const WindowACComponent = () => {
  return (
    <>
    <Navbar />
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          Split AC Services
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.com}><strong>Gas refilling is essential when your AC is not cooling effectively. AC Service Gurgaon provides professional gas refilling services using high-quality refrigerants to ensure optimal performance.</strong></div>


        <h2>Split AC Gas Refilling</h2>
        
        <h3>Types of Refrigerants Used in Split ACs:</h3>
        <ul>
          <li><strong>R-22:</strong> Older AC models use R-22, but it is being phased out due to environmental concerns.</li>
          <li><strong>R-32:</strong> More energy-efficient and eco-friendly compared to R-22, with a lower global warming potential.</li>
          <li><strong>R-410A:</strong> A chlorine-free refrigerant that enhances efficiency and cooling performance while being environmentally safe.</li>
        </ul>

        <h3>Gas Refilling Process:</h3>
        <ul>
          <li><strong>Leakage Detection:</strong> Checking for any leaks in the refrigerant lines.</li>
          <li><strong>Vacuuming the System:</strong> Removing moisture and air to prevent contamination.</li>
          <li><strong>Refilling with Suitable Gas:</strong> Adding the appropriate refrigerant to restore cooling efficiency.</li>
          <li><strong>Testing & Verification:</strong> Ensuring proper pressure levels and optimal performance.</li>
        </ul>

        <h2>Why Choose AC Service Gurgaon?</h2>
        <ul>
          <li><strong>Expert Technicians:</strong> Our team is well-trained and experienced in handling all AC brands.</li>
          <li><strong>Affordable & Transparent Pricing:</strong> No hidden costs; get quality service at budget-friendly rates.</li>
          <li><strong>Quick & Reliable Service:</strong> Get same-day service for hassle-free AC maintenance.</li>
          <li><strong>Customer Satisfaction Guarantee:</strong> We ensure 100% customer satisfaction with our service warranty.</li>
        </ul>
      </div>
      <div className={styles.contactSection}>
        <p className={styles.tagline}>100% convenience with 0 hassle. That’s how we keep you free.</p>
        <div className={styles.buttonContainer}>
          <a href="tel:+91810954362" className={styles.contactButton}>Contact Now</a>
          <a href="tel:+917011132581" className={styles.callButton}>Call Now</a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default WindowACComponent;
