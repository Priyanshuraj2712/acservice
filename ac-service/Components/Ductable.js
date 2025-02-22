import React from "react";
import styles from "@/styles/Cassette.module.css"; 

const ACServiceComponent = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
      <div className={styles.heroOverlay}>
      Ductable Air Conditioning System Maintenance Services in Gurgaon
      <p>Welcome to AC Service Gurgaon, your trusted provider of Ductable air conditioning system maintenance.</p>
      </div>
    </div>
    <div className={styles.content}>
  <h2>Ductable AC Repair Services in Gurgaon</h2>
  <p>
    Many homeowners are unaware that their ductable AC system can accumulate large amounts of dirt, dust, debris, pet dander, 
    insects, and even rodents over time. These pollutants can negatively impact your heating and cooling system, 
    leading to poor air quality and decreased efficiency. This can be particularly harmful for family members 
    with allergies, asthma, or respiratory conditions, especially young children and the elderly.
  </p>

  <h3>Why Choose Our Ductable AC Services?</h3>
  <ul>
    <li>Experienced and certified technicians.</li>
    <li>Comprehensive AC repair, servicing, and installation.</li>
    <li>Advanced duct cleaning and sanitization for improved air quality.</li>
    <li>Leak-proof duct sealing for energy efficiency.</li>
    <li>Affordable pricing with no hidden charges.</li>
  </ul>

  <h3>Benefits of Duct Cleaning</h3>
  <p>
    Just like regular AC and furnace maintenance, professional duct cleaning can improve the efficiency of your 
    heating and cooling system. Here’s how:
  </p>
  <ul>
    <li>Prevents blockage and improves airflow.</li>
    <li>Enhances the performance and lifespan of your AC unit.</li>
    <li>Reduces electricity bills by ensuring the system doesn’t overwork.</li>
    <li>Eliminates dust, allergens, and bacteria from circulating in your home.</li>
  </ul>

  <h3>Our Ductable AC Services in Gurgaon</h3>
  <p>
    At <strong>acservicegurgaon</strong>, we provide a complete range of ductable AC services, including:
  </p>
  <ul>
    <li><strong>Repair & Servicing:</strong> Fixing airflow issues, refrigerant leaks, and component malfunctions.</li>
    <li><strong>Installation:</strong> Professional setup of ductable AC systems for homes and commercial spaces.</li>
    <li><strong>Duct Cleaning:</strong> Thorough cleaning and sanitization to improve air quality.</li>
    <li><strong>Leak-Proof Duct Sealing:</strong> Prevents air loss and enhances energy efficiency.</li>
    <li><strong>Preventative Maintenance:</strong> Regular check-ups to keep your system running smoothly.</li>
  </ul>

  <h3>Why Sealing Your Ducts is Important</h3>
  <p>
    Over time, air ducts can develop leaks and gaps, allowing conditioned air to escape into unwanted areas like walls, 
    attics, and closets. This forces your AC or heating system to work harder, leading to:
  </p>
  <ul>
    <li>Higher energy consumption and electricity bills.</li>
    <li>Uneven cooling and heating across your home.</li>
    <li>Reduced efficiency of your AC system.</li>
  </ul>
  <p>
    Sealing your ducts prevents air leaks and ensures maximum efficiency, helping you maintain a comfortable indoor temperature 
    while reducing energy costs.
  </p>

  <h3>Book Your Ductable AC Repair Today!</h3>
  <p>
    Don’t let a faulty duct system affect your comfort. <strong>acservicegurgaon</strong> offers expert AC repair, servicing, 
    and duct cleaning solutions at competitive prices.
  </p>
</div>


      <div className={styles.contactSection}>
        <p className={styles.tagline}>100% convenience with 0 hassle. That’s how we keep you free.</p>
        <div className={styles.buttonContainer}>
          <a href="tel:+919810954362" className={styles.contactButton}>Contact Now</a>
          <a href="tel:+917011132581" className={styles.callButton}>Call Now</a>
        </div>
      </div>
    </div>
  );
}

export default ACServiceComponent;
