import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Wave Animation */}
      <div className={styles.wave}></div>

      <div className={styles.container}>
        {/* Footer Links Section */}
        <div className={styles.footerLinks}>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Why Choose Us?</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Help Center</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icon}><FaTwitter /></a>
              <a href="#" className={styles.icon}><FaFacebookF /></a>
              <a href="#" className={styles.icon}><FaInstagram /></a>
              <a href="#" className={styles.icon}><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
