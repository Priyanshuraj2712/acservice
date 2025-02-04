'use client';
import styles from './Fitting.module.css';

export default function FittingComponent() {
  return (
    <div>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>We repair all AC brands</h1>
        <p>AC Service & AC Gas Filling at Doorstep</p>
      </div>
      
      {/* Content Section */}
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h2>Copper Pipe Fitting Services In Gurgaon</h2>
          <p>
            acservicegurgaon are in the Copper Pipe Fitting Services for the past several years...
          </p>
        </div>
        <div className={styles.form}>
          <input type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter Your Phone" />
          <input type="email" placeholder="Enter Your E-mail" />
          <input type="date" />
          <select>
            <option>Select Time</option>
          </select>
          <select>
            <option>Window AC</option>
          </select>
          <textarea placeholder="Enter Your Message Here"></textarea>
          <button>SEND</button>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className={styles.contactSection}>
        <p>100% convenience with 0 hassle. That’s how we keep you free.</p>
        <div className={styles.buttons}>
          <button className={styles.contactButton}>Contact Us</button>
          <button className={styles.callButton}>Call Now</button>
        </div>
      </div>
    </div>
  );
}
