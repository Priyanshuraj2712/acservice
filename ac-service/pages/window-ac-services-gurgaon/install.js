import React from "react";
import styles from "@/styles/Install.module.css"; 
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";
import Link from 'next/link';

const WindowACComponent = () => {
  return (
    <>
    <Navbar />
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          Window AC Installation and Uninstallation
        </div>
      </div>
      <div className={styles.content}>
      <div className={styles.com}><strong>Proper installation and uninstallation of a window AC is crucial for its performance and longevity. At AC Service Gurgaon, we provide expert services to ensure your AC is securely fitted, operates efficiently, and is safely removed when needed.</strong></div>
        <h2>Window AC Installation</h2>
        <p>Our expert installation services ensure your AC is securely fitted and operates efficiently.</p>
        <h3>Installation Process:</h3>
        <ul>
          <li><strong>Site Inspection:</strong> Checking the window frame and power supply.</li>
          <li><strong>Bracket Installation:</strong> Securely fitting the support brackets.</li>
          <li><strong>AC Placement:</strong> Positioning the AC unit in the window frame.</li>
          <li><strong>Testing & Final Check:</strong> Running the AC to check for efficiency and performance.</li>
        </ul>

        <h2>Window AC Uninstallation</h2>
        <p>If you need to remove or relocate your window AC, professional uninstallation is necessary to avoid damage to the unit and your home.</p>
        <h3>Uninstallation Process:</h3>
        <ul>
          <li><strong>Power Disconnection:</strong> Safely unplugging the unit.</li>
          <li><strong>Removing Support Brackets:</strong> Carefully detaching the mounting hardware.</li>
          <li><strong>Lifting Out the AC Unit:</strong> Removing the AC without causing damage.</li>
          <li><strong>Cleaning & Packing:</strong> Ensuring the unit is clean and ready for storage or relocation.</li>
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
        <Link href="/contact-us" className={styles.contactButton}>
      Contact Now
    </Link>
          
          <a href="tel:919810954362" className={styles.callButton}>Call Now</a>
        </div>
      </div>
    </div>
    <Footer />
    <WhatsAppToggle/>
    </>
  );
}

export default WindowACComponent;
