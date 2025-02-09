import React from "react";
import styles from "@/styles/Cassette.module.css"; 

const ACServiceComponent = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
      <div className={styles.heroOverlay}>
      Cassette Air Conditioning System Maintenance Services in Gurgaon
      <p>Welcome to AC Service Gurgaon, your trusted provider of Cassette air conditioning system maintenance.</p>
      </div>
    </div>
    <div className={styles.content}>
  <h2>Cassette AC Repair Services in Gurgaon</h2>
  <p>
    At <strong>acservicegurgaon</strong>, we offer a wide range of top-quality Cassette AC repair and maintenance 
    services across Gurgaon. Our commitment to quality, reliability, and affordable pricing has made us a trusted name 
    in the industry.
  </p>

  <h3>Why Choose Our Cassette AC Repair Services?</h3>
  <ul>
    <li>Highly skilled and certified technicians.</li>
    <li>Fast and efficient repair solutions.</li>
    <li>Use of genuine parts and advanced tools.</li>
    <li>Affordable pricing with no hidden charges.</li>
    <li>Emergency repair services available.</li>
  </ul>

  <h3>Importance of Cassette AC Maintenance</h3>
  <p>
    A well-functioning Cassette AC ensures a comfortable environment for employees and clients. However, 
    when your AC starts showing issues, it can lead to:
  </p>
  <ul>
    <li>Discomfort and reduced productivity in the office.</li>
    <li>Increased electricity bills due to inefficient cooling.</li>
    <li>Unexpected breakdowns leading to costly repairs.</li>
  </ul>
  <p>
    Regular maintenance and timely repairs can prevent these issues, ensuring the longevity and efficiency of your AC system.
  </p>

  <h3>Our Cassette AC Services</h3>
  <p>
    Our expert team provides a comprehensive range of Cassette AC services, including:
  </p>
  <ul>
    <li><strong>Repair & Service:</strong> Fixing all kinds of cassette AC issues, including cooling problems, gas refilling, and part replacements.</li>
    <li><strong>Replacement:</strong> Upgrading old or damaged parts to enhance performance and efficiency.</li>
    <li><strong>Design, Build & Installation:</strong> Expert AC installation for offices, commercial spaces, and industrial setups.</li>
    <li><strong>Preventative Maintenance:</strong> Routine check-ups to avoid breakdowns and ensure smooth operation.</li>
  </ul>

  <h3>Why Trust Our Experts?</h3>
  <p>
    Finding a reliable Cassette AC technician can be challenging. Our professionals have years of experience in handling 
    commercial air conditioning systems, ensuring:
  </p>
  <ul>
    <li>Accurate diagnostics and quick solutions.</li>
    <li>Use of advanced tools and techniques for repairs.</li>
    <li>Customized maintenance plans for long-term efficiency.</li>
  </ul>

  <h3>Book Your Cassette AC Service Today!</h3>
  <p>
    At <strong>acservicegurgaon</strong>, we guarantee top-notch repair and maintenance services at the most competitive prices. 
    Whether you need an urgent repair or routine maintenance, our skilled technicians are just a call away. 
    <strong>Book an appointment today</strong> and let us take care of your air-conditioning needs!
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
}

export default ACServiceComponent;
