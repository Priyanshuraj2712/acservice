import React from "react";
import styles from "@/styles/VRV.module.css";

const VRV_VRF_Services = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          VRV and VRF Air Conditioning System Services in Gurgaon
          <p>Professional Installation, Repair, Gas Refilling & Maintenance</p>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <h2>Welcome to AC Service Gurgaon</h2>
        <p>
          Your one-stop solution for VRV and VRF air conditioner system services
          in Gurgaon! We provide professional service, installation, gas
          refilling, and repair for advanced HVAC systems, ensuring comfort and
          efficiency for homes and businesses alike.
        </p>

        <h2>Why Choose AC Service Gurgaon for VRV and VRF Systems?</h2>
        
        <h3>Comprehensive Services</h3>
        <p>
          From installation to repair and maintenance, we handle every aspect of VRV and VRF systems with precision and expertise.
        </p>

        <h3>Expert Technicians</h3>
        <p>
          Our team of certified professionals is trained to work with all major VRV and VRF brands, including Daikin, Mitsubishi, Toshiba, and others.
        </p>

        <h3>Affordable Pricing</h3>
        <p>
          We offer competitive rates for all our services without compromising on quality.
        </p>

        <h3>Timely and Reliable Service</h3>
        <p>
          We value your time and ensure prompt responses and on-time completion of all services.
        </p>

        <h2>Our VRV and VRF Air Conditioner Services</h2>
        
        <h3>1. Installation Services</h3>
        <p>
          Installing a VRV or VRF system requires expertise and precision. We:
        </p>
        <ul>
          <li>Conduct site inspections to design the ideal layout.</li>
          <li>Install outdoor and indoor units efficiently.</li>
          <li>Ensure proper refrigerant piping and electrical connections for optimal performance.</li>
        </ul>

        <h3>2. Repair Services</h3>
        <p>Facing issues like poor cooling, heating, or unusual noises? Our repair services include:</p>
        <ul>
          <li>Diagnosing and fixing refrigerant flow issues.</li>
          <li>Resolving electrical malfunctions.</li>
          <li>Replacing damaged components like compressors, fans, and sensors.</li>
        </ul>

        <h3>3. Gas Refilling Services</h3>
        <p>Low refrigerant levels can reduce efficiency. We:</p>
        <ul>
          <li>Check refrigerant levels accurately.</li>
          <li>Refill gas as per system specifications.</li>
          <li>Ensure no leaks in the refrigerant piping.</li>
        </ul>

        <h3>4. Maintenance Services</h3>
        <p>Preventive maintenance is essential for optimal performance. Our services include:</p>
        <ul>
          <li>Cleaning filters, ducts, and coils.</li>
          <li>Inspecting electrical and mechanical components.</li>
          <li>Regular system performance checks.</li>
        </ul>

        <h2>Why Regular Maintenance for VRV/VRF Systems is Essential</h2>
        <p>
          Modern VRV and VRF systems are designed for efficiency and precision. Regular maintenance ensures:
        </p>
        <ul>
          <li><strong>Improved energy efficiency:</strong> Reduces utility bills.</li>
          <li><strong>Prolonged system lifespan:</strong> Prevents costly breakdowns.</li>
          <li><strong>Consistent performance:</strong> Ensures year-round comfort.</li>
          <li><strong>Healthier air quality:</strong> Keeps filters and ducts clean.</li>
        </ul>

        <h2>Benefits of Choosing AC Service Gurgaon</h2>

        <h3>24/7 Support</h3>
        <p>We’re available around the clock for emergency repairs and services.</p>

        <h3>Genuine Spare Parts</h3>
        <p>We use authentic spare parts to ensure system longevity and performance.</p>

        <h3>Customized Solutions</h3>
        <p>
          Whether it’s a small office or a large commercial building, we provide tailored solutions to meet your specific needs.
        </p>

        <p>
          At AC Service Gurgaon, we are committed to keeping your VRV/VRF systems in top shape, ensuring year-round comfort and efficiency. Your satisfaction is our priority!
        </p>
      </div>
      <div className={styles.contactSection}>
        <p className={styles.tagline}>100% convenience with 0 hassle. That’s how we keep you free.</p>
        <div className={styles.buttonContainer}>
          <a href="tel:+91810954362" className={styles.contactButton}>Contact Now</a>
          <a href="tel:+917011132581" className={styles.callButton}>Call Now</a>
        </div>
      </div>
    </div>
  );
};

export default VRV_VRF_Services;
