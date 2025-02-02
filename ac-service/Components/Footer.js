import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}></div>

      <div className={styles.container}>
        <div className={styles.footerLinks}>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/">Services</Link></li>
              <li><Link href="/why-choose-us">Why Choose Us?</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><Link href="/">FAQs</Link></li>  
              <li><Link href="/contact">Help Center</Link></li> 
              <li><Link href="/">Terms & Conditions</Link></li> 
              <li><Link href="/">Privacy Policy</Link></li>
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
