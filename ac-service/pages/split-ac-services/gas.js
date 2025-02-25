import React from "react";
import styles from "@/styles/InstallSplit.module.css"; 
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

const SplitACComponent = () => {
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
        <h1>Best Split AC Gas Refilling Service in Gurgaon – ACServiceGurgaon.com</h1>
        <p>A Split AC relies on refrigerant gas to cool your space efficiently. If your AC is not cooling properly, blowing warm air, or taking too long to cool, it might be time for a gas refill. At AC Service Gurgaon, we offer the best Split AC gas refilling service in Gurgaon, ensuring your air conditioner performs at its peak efficiency.</p>
        
        <h2>Signs Your Split AC Needs Gas Refilling</h2>
        <ul>
          <li><strong>Reduced Cooling Efficiency</strong> – If your AC is running but not cooling effectively, low refrigerant levels could be the reason.</li>
          <li><strong>Higher Electricity Bills</strong> – A gas leak can cause your AC to work harder, leading to increased power consumption.</li>
          <li><strong>Hissing or Bubbling Sound</strong> – If you hear unusual noises, it may indicate a refrigerant leak.</li>
          <li><strong>Ice Formation on AC Coils</strong> – A drop in gas levels can cause ice buildup on the evaporator coils.</li>
          <li><strong>Warm Air from AC</strong> – If your AC is blowing warm or less cool air, gas refilling is necessary.</li>
        </ul>

        <h2>Why Choose AC Service Gurgaon for AC Gas Refilling?</h2>
        <ul>
          <li><strong>Expert Technicians & Leak Detection</strong> – Our trained professionals detect and fix leaks before refilling the refrigerant, ensuring a long-lasting and efficient cooling experience.</li>
          <li><strong>Use of High-Quality Refrigerants</strong> – We use genuine refrigerants like R22, R32, and R410A, suitable for all major AC brands, including Daikin, Voltas, LG, Blue Star, Hitachi, Carrier, and Panasonic.</li>
          <li><strong>Proper Vacuuming for Maximum Efficiency</strong> – Before refilling, we vacuum the system to remove moisture and air, preventing performance issues and compressor damage.</li>
          <li><strong>Affordable & Transparent Pricing</strong> – We offer budget-friendly AC gas refilling services with no hidden charges, ensuring you get the best value for money.</li>
          <li><strong>Same-Day Service Across Gurgaon</strong> – Need an urgent gas refill? Our team provides fast and reliable gas refilling services across Gurgaon on the same day!</li>
        </ul>

        <h2>Best AC Gas Refill Prices in Gurgaon</h2>
        <p>At AC Service Gurgaon, we provide cost-effective Split AC gas refilling services based on your AC type and refrigerant requirements. Contact us for the latest pricing!</p>

        <h2>Book the Best Split AC Gas Refilling in Gurgaon Today!</h2>
        <p>For professional AC gas refilling with leak detection, vacuuming, and expert service, trust AC Service Gurgaon.</p>

        <div className={styles.contactSection}>
        <p className={styles.tagline}>100% convenience with 0 hassle. That’s how we keep you free.</p>
        <div className={styles.buttonContainer}>
          <a href="tel:+919810954362" className={styles.contactButton}>Contact Now</a>
          <a href="tel:+917011132581" className={styles.callButton}>Call Now</a>
        </div>
      </div>
      </div>
    </div>
    <Footer />
    <WhatsAppToggle/>
    </>
  );
}

export default SplitACComponent;
