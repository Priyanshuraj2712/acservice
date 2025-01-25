import React from "react";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
        <img
              src="/logo.png"
              alt="AC Service Gurgaon"
              className={styles.logo}
            />
        </div>
        <div className={styles.footerLinks}>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>Why choose us?</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4>For customers</h4>
            <ul>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          
          <div>
            <h4>Social links</h4>
            <div className={styles.socialIcons}>
              <span>🐦</span>
              <span>📘</span>
              <span>📸</span>
              <span>🔗</span>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
