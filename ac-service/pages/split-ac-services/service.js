import React from "react";
import styles from "@/styles/ServiceSplit.module.css"; 
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";
import Link from "next/link";

const SplitACService = () => {
  return (
    <>
      <Navbar />
      <div className={styles.aboutContainer}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}>
          Why Choose Regular Split AC Servicing?
          </div>
        </div>
        <div className={styles.content}>
          <h2>Why Split AC Service is Important Every Year?</h2>
          <p>
            A Split AC is essential for keeping your home cool and comfortable, especially during the scorching summer months. However, regular AC servicing is often overlooked, leading to reduced efficiency, higher electricity bills, and unexpected breakdowns. That’s why it’s crucial to get your Split AC serviced annually by professionals like AC Service Gurgaon.
          </p>
          
          <h2>Benefits of Regular Split AC Servicing</h2>
          <ul>
            <li><strong>Increases Cooling Efficiency:</strong> Dust and dirt accumulate in AC filters and coils over time, reducing cooling performance. A professional service ensures maximum cooling with minimal energy consumption.</li>
            <li><strong>Saves Energy & Reduces Bills:</strong> A well-maintained AC consumes less power. Regular servicing ensures efficient operation, leading to lower electricity bills.</li>
            <li><strong>Prevents Sudden Breakdowns:</strong> Skipping maintenance can cause technical failures. Routine servicing helps detect minor issues early, preventing costly repairs.</li>
            <li><strong>Improves Air Quality:</strong> Dirty filters and clogged ducts circulate allergens and bacteria. Professional cleaning ensures clean, fresh air for your family.</li>
            <li><strong>Extends AC Lifespan:</strong> Regular servicing enhances durability, preventing early wear and tear and saving money on replacements.</li>
          </ul>
          
          <h2>When Should You Get Your Split AC Serviced?</h2>
          <p>
            Experts recommend servicing your AC at least once a year, ideally before summer starts. If you notice reduced cooling, strange noises, or increased energy bills, it’s time to call AC Service Gurgaon.
          </p>
          
          <h2>Best AC Service in Gurgaon – ACServiceGurgaon.com</h2>
          <ul>
            <li><strong>Expert Technicians:</strong> Trained and experienced professionals.</li>
            <li><strong>Same-Day Service:</strong> Quick and reliable servicing.</li>
            <li><strong>Affordable Pricing:</strong> Transparent and budget-friendly rates.</li>
            <li><strong>100% Customer Satisfaction:</strong> Service warranty for complete satisfaction.</li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <p className={styles.tagline}>100% convenience with 0 hassle. That’s how we keep you free.</p>
          <div className={styles.buttonContainer}>
          <Link href="/contact-us" className={styles.contactButton}>
      Contact Now
    </Link>
            
            <a href="tel:+919810954362" className={styles.callButton}>Call Now</a>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppToggle />
    </>
  );
};

export default SplitACService;
