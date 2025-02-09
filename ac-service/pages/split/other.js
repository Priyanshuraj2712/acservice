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
          Split AC Repair Services
        </div>
      </div>
      <div className={styles.content}>
        <h2>Split AC Repair & Maintenance Services</h2>
        <h3>1. PCB (Printed Circuit Board) Repair</h3>
        <p>The PCB controls essential functions of your AC. We provide expert PCB repairs, replacing faulty components to restore functionality.</p>
        
        <h3>2. Fan Motor Check & Repair</h3>
        <p>A faulty fan motor can lead to inadequate cooling. We inspect, clean, and repair fan motors.</p>
        
        <h3>3. Capacitor Check & Replacement</h3>
        <p>The capacitor provides the initial boost needed to start the compressor and fan. We diagnose and replace faulty capacitors.</p>
        
        <h3>4. Compressor Check & Repair</h3>
        <p>The compressor is the heart of your AC system. We diagnose issues like overheating, noises, or failure to start.</p>
        
        <h3>5. Thermostat Repair & Calibration</h3>
        <p>A malfunctioning thermostat can cause temperature fluctuations. We calibrate or replace faulty thermostats.</p>
        
        <h3>6. Drainage System Cleaning & Fixing Leaks</h3>
        <p>Blocked or leaking drain pipes can lead to water leakage. We clean and unclog the drainage system.</p>
        
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
