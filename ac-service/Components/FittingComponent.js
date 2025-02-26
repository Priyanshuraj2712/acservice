import React from "react";
import styles from "@/styles/Fitting.module.css"; // Make sure to import the correct stylesheet
import Link from "next/link";

const FittingComponent = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1>We repair all AC brands</h1>
          <p>AC Service & AC Gas Filling at Doorstep</p>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <h2>Copper Pipe Fitting Services in Gurgaon</h2>
        <p>
          <strong><a href="https://acservicegurgaon.com/" rel="noopener noreferrer" className={styles.linking}>ACServiceGurgaon.com</a></strong> are in the Copper Pipe Fitting Services for the past several years. We are one of the best and reputed fitting service provider in Gurgaon and our strong presence in the industry is a proof for the same. Our customers are always treated with politeness and you can feel it when you are with us.
        </p>

        <h3>Why Choose Our Copper Pipe Fitting Services?</h3>
        <ul>
          <li>Highly experienced technicians with years of expertise.</li>
          <li>Precision and quality assurance in every project.</li>
          <li>Usage of premium-grade copper pipes and fittings.</li>
          <li>Affordable pricing with no hidden costs.</li>
          <li>Timely completion of projects with guaranteed customer satisfaction.</li>
        </ul>

        <h3>Our Services</h3>
        <p>
        All services we offer are exclusive in its quality and we live up to the prospects of our clients. At <strong><a href="https://acservicegurgaon.com/" rel="noopener noreferrer" className={styles.linking}>ACServiceGurgaon.com</a> </strong>we provide services such as Air Compressor Service and Air Compressor Rentals, copper Pipeline fitting in home and commercial Works, Industrial Pipeline Assembly in Gurgaon</p>
        <ul>
          <li><strong>Residential Copper Pipeline Fitting:</strong> Safe and efficient installation of copper pipelines in homes.</li>
          <li><strong>Commercial and Industrial Pipeline Assembly:</strong> Specialized fitting for businesses, factories, and industrial setups.</li>
          <li><strong>Air Compressor Pipe Installation:</strong> Expert services for air compressor systems, ensuring smooth operation.</li>
          <li><strong>Maintenance & Repair Services:</strong> Regular inspection and repair of copper pipe fittings to prevent leaks and damages.</li>
          <li><strong>Custom Pipeline Solutions:</strong> Tailored services for specific pipeline needs, ensuring optimal performance.</li>
        </ul>

        <h3>Benefits of Copper Pipe Fittings</h3>
        <ul>
          <li>Highly durable and corrosion-resistant.</li>
          <li>Excellent thermal conductivity, making it ideal for HVAC systems.</li>
          <li>Leak-proof joints ensuring longevity and efficiency.</li>
          <li>Eco-friendly and recyclable material.</li>
          <li>Low maintenance and long lifespan.</li>
        </ul>

        <h3>Why Expert Installation is Essential?</h3>
        <p>
          Copper pipe fitting requires precision and expertise due to its rigid nature. Proper installation ensures:
        </p>
        <ul>
          <li>Leak-free and secure connections.</li>
          <li>Efficient water or gas flow without blockages.</li>
          <li>Extended lifespan of the piping system.</li>
          <li>Compliance with safety and industry standards.</li>
        </ul>

        <h3>Contact Us for Reliable Copper Pipe Fitting in Gurgaon</h3>
        <p>
          At <strong><a href="https://acservicegurgaon.com/" rel="noopener noreferrer" className={styles.linking}>ACServiceGurgaon.com</a></strong>, we guarantee top-notch copper pipe fitting services across Gurgaon. 
          Whether it for residential, commercial, or industrial applications, our skilled professionals are ready to deliver 
          outstanding results.
        </p>
        <p>
          <strong><a href="tel:+919810954362" className={styles.linking}>Get in touch today!</a></strong> Call us or book an appointment for expert copper pipe fitting services in Gurgaon.
        </p>
      </div>


      {/* Contact Section */}
      <div className={styles.contactSection}>
        <p className={styles.tagline}>100% convenience with 0 hassle. That’s how we keep you free.</p>
        <div className={styles.buttonContainer}>
        <Link href="/contact-us" className={styles.contactButton}>
      Contact Now
    </Link>
          <a href="tel:+917011132581" className={styles.callButton}>Call Now</a>
        </div>
      </div>
    </div>
  );
};

export default FittingComponent;
