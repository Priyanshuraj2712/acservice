import React from "react";
import styles from "@/styles/InstallSplit.module.css"; 
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

const WindowACComponent = () => {
  return (
    <>
    <Navbar />
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          Split Ac Installation and Uninstallation
        </div>
      </div>
      <div className={styles.content}>
        <h2>Why AC Service Gurgaon is the Best for Split AC Installation?</h2>
        <p><strong>Installing a Split AC requires expert handling to ensure efficient cooling, energy savings, and long-lasting performance. Choosing a professional AC installation service is crucial to avoid common issues like gas leaks, inefficient cooling, and high electricity bills. That’s why AC Service Gurgaon is the #1 choice for Split AC installation in Gurgaon for top brands like Daikin, Voltas, LG, Blue Star, Hitachi, Carrier, Panasonic, and more.</strong></p>
        
        <h2>Why Choose AC Service Gurgaon for Split AC Installation?</h2>
        
        <h3> Certified Experts for Hassle-Free Installation</h3>
        <p>At AC Service Gurgaon, we have a team of trained technicians skilled in installing all major air conditioner brands. Whether it's a Daikin Inverter AC, Voltas 1.5 Ton Split AC, LG Dual Inverter AC, or Blue Star AC, our experts ensure a smooth and professional installation.</p>
        
        <h3> Proper Vacuuming for Maximum Efficiency</h3>
        <p>One of the most crucial yet often ignored steps in Split AC installation is vacuuming the refrigerant lines. At AC Service Gurgaon, we ensure:</p>
        <ul>
          <li> Proper vacuuming to remove moisture, air, and contaminants from the refrigerant system</li>
          <li> Prevention of performance issues, gas leaks, and compressor failure</li>
          <li> Enhanced cooling efficiency and energy savings</li>
        </ul>
        <p>Many local technicians skip this step, which can lead to poor cooling, increased energy consumption, and long-term damage to your AC.</p>
        
        <h3>Perfect Indoor & Outdoor Unit Placement</h3>
        <p>Our experts carefully position the indoor and outdoor units for:</p>
        <ul>
          <li> Efficient airflow and cooling</li>
          <li> Reduced noise during operation</li>
          <li> Long-lasting performance</li>
        </ul>
        
        <h3>High-Quality Piping & Wiring</h3>
        <p>We use best-in-class copper pipes, durable insulation, and secure wiring to prevent refrigerant leaks and electrical hazards.</p>
        
        <h3>Affordable Pricing – No Hidden Costs!</h3>
        <p>We offer budget-friendly Split AC installation services for all major brands, with no hidden charges. Get top-quality installation at affordable rates for your Daikin, Voltas, LG, Hitachi, Carrier, Panasonic, or Blue Star AC.</p>
        
        <h3>Same-Day Installation Across Gurgaon</h3>
        <p>Need urgent Split AC installation? Our team provides same-day service across Gurgaon, ensuring your home stays cool without delays.</p>
        
        <h2>Brands We Install:</h2>
        <p>We specialize in installing all major Split AC brands, including:</p>
        <ul>
          <li>🔹 Daikin 🔹 Voltas 🔹 LG 🔹 Blue Star 🔹 Hitachi 🔹 Carrier 🔹 Panasonic 🔹 Samsung 🔹 O General & more!</li>
        </ul>
        
        <h2>Book the Best Split AC Installation Service in Gurgaon Today!</h2>
        <p>For professional Split AC installation with vacuuming, expert mounting, and secure wiring, trust AC Service Gurgaon.</p>
        <p><strong>Get your Split AC installed the right way – Choose AC Service Gurgaon for a hassle-free experience! ❄️🔧</strong></p>
      </div>
      <div className={styles.contactSection}>
        <p className={styles.tagline}>100% convenience with 0 hassle. That’s how we keep you free.</p>
        <div className={styles.buttonContainer}>
          <a href="tel:+919810954362" className={styles.contactButton}>Contact Now</a>
          <a href="tel:+917011132581" className={styles.callButton}>Call Now</a>
        </div>
      </div>
    </div>
    <Footer />
    <WhatsAppToggle/>
    </>
  );
}

export default WindowACComponent;