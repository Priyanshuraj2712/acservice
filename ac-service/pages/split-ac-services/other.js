import React from "react";
import styles from "@/styles/InstallSplit.module.css"; 
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";
import Link from "next/link";

const WindowACComponent = () => {
  return (
    <>
      <Navbar />
      <div className={styles.aboutContainer}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}>
            Best Split AC Repair Services in Gurgaon
          </div>
        </div>
        <div className={styles.content}>
          <h2>Common Split AC Problems We Fix</h2>
          
          <h3>PCB (Printed Circuit Board) Repair & Replacement</h3>
          <p>The PCB (Printed Circuit Board) is the brain of your AC, controlling various functions like cooling, compressor operation, and fan speed. Common PCB issues include:</p>
          <ul>
            <li>AC not turning on or off</li>
            <li>Error codes on display</li>
            <li>Unresponsive remote control</li>
            <li>Irregular cooling cycles</li>
          </ul>
          <p>At AC Service Gurgaon, we provide expert PCB repair and replacement services for all major brands, including Daikin, Voltas, LG, Blue Star, Hitachi, Carrier, and Panasonic.</p>
          
          <h3>AC Fan Motor Repair & Replacement</h3>
          <p>The fan motor in your Split AC plays a crucial role in air circulation. If your AC is making loud noises or not blowing air properly, you may have a damaged fan motor. We offer:</p>
          <ul>
            <li>Indoor & Outdoor Fan Motor Repair</li>
            <li>Blower Fan Cleaning & Replacement</li>
            <li>Fan Speed & Wiring Fixes</li>
          </ul>
          
          <h3>Compressor Repair & Replacement</h3>
          <p>The compressor is the heart of your AC. A faulty compressor can lead to:</p>
          <ul>
            <li>AC not cooling properly</li>
            <li>AC not turning on</li>
            <li>Unusual noises from the outdoor unit</li>
          </ul>
          <p>We diagnose and repair compressor issues for all major brands with genuine spare parts.</p>
          
          <h3>Sensor & Thermostat Repair</h3>
          <p>Faulty sensors can cause your AC to:</p>
          <ul>
            <li>Turn off too soon or keep running continuously</li>
            <li>Display incorrect temperature readings</li>
            <li>Fail to maintain the set temperature</li>
          </ul>
          <p>Our experts fix sensor calibration and thermostat issues for accurate temperature control.</p>
          
          <h3>Gas Leakage Detection & Refilling</h3>
          <p>If your AC is losing cooling power, it might have a gas leak. Our technicians:</p>
          <ul>
            <li>Detect & fix gas leaks</li>
            <li>Vacuum the system before refilling</li>
            <li>Use high-quality refrigerants (R22, R32, R410A, etc.)</li>
          </ul>
          
          <h3>Water Leakage & Drain Pipe Cleaning</h3>
          <p>Is your AC leaking water? Blocked drain pipes or improper installation can cause water leakage issues. We provide:</p>
          <ul>
            <li>Drain pipe cleaning & replacement</li>
            <li>Leakage repair & sealing</li>
            <li>Proper AC unit alignment</li>
          </ul>
          
          <h3>Power Supply & Wiring Issues</h3>
          <p>Electrical issues like damaged wiring, faulty capacitors, or loose connections can prevent your AC from functioning properly. We offer safe and efficient electrical repairs to restore normal operation.</p>
          
          <h2>Why Choose AC Service Gurgaon for Split AC Repairs?</h2>
          <ul>
            <li>Certified & Experienced Technicians</li>
            <li>Affordable Pricing with No Hidden Charges</li>
            <li>Same-Day Repair Service in Gurgaon</li>
            <li>Genuine Spare Parts & Warranty on Repairs</li>
            <li>Service for All AC Brands – Daikin, Voltas, LG, Blue Star, Hitachi, Carrier, Panasonic & More</li>
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
      <WhatsAppToggle/>
    </>
  );
};

export default WindowACComponent;
