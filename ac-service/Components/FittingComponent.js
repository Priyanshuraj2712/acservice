import React from "react";
import styles from "@/styles/Fitting.module.css";

const FittingComponent = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>We repair all AC brands</h1>
        <p>AC Service & AC Gas Filling at Doorstep</p>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <h2 className={styles.heading}>Copper Pipe Fitting Services In Gurgaon</h2>
        <p>
          <span className={styles.highlight}>acservicegurgaon</span> are in the Copper Pipe Fitting Services for the past several years. 
          We are one of the best and reputed fitting service provider in Gurgaon, and our strong presence in the industry 
          is a proof for the same. Our customers are always treated with politeness, and you can feel it when you are with us.
        </p>
        <p>
          All services we offer are exclusive in its quality, and we live up to the prospects of our clients. 
          At <span className={styles.highlight}>acservicegurgaon</span>, we provide services such as Air Compressor Service 
          and Air Compressor Rentals, <strong>copper Pipeline fitting in home and commercial Works, 
          Industrial Pipeline Assembly in Gurgaon</strong>.
        </p>
        <p>
          <strong>Copper pipe fittings</strong> is perhaps the most versatile of all <strong>piping</strong> types in that 
          <span className={styles.boldText}> you can use virtually any fitting</span> with it. 
          <strong>Copper pipe</strong>, however, is not particularly flexible, which can make it a little unwieldy to work with. 
          This tend to thing, pipe fitting isn’t easy. We need an expert to complete the task, 
          You don’t worry about this, here at <span className={styles.highlight}>acservicegurgaon</span> we provide you 
          quality and unmatched copper fitting services anywhere in Gurgaon.
        </p>
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <p className={styles.tagline}>100% convenience with 0 hassle. That’s how we keep you free.</p>
        <div className={styles.buttonContainer}>
          <button className={styles.contactButton}>Contact Us</button>
          <button className={styles.callButton}>Call Now</button>
        </div>
      </div>
    </div>
  );
};

export default FittingComponent;
