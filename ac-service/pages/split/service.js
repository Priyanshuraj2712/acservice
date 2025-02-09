import React from "react";
import styles from "@/styles/Service.module.css"; 
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const WindowACService = () => {
  return (
    <>
    <Navbar />
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          Why Choose Regular Split AC Servicing?
        </div>
      </div>
      <div className={styles.content}>
        <ul>
          <li><strong>Expert Technicians:</strong> Our team is well-trained and experienced in handling all AC brands.</li>
          <li><strong>Affordable & Transparent Pricing:</strong> No hidden costs; get quality service at budget-friendly rates.</li>
          <li><strong>Quick & Reliable Service:</strong> Get same-day service for hassle-free AC maintenance.</li>
          <li><strong>Customer Satisfaction Guarantee:</strong> We ensure 100% customer satisfaction with our service warranty.</li>
        </ul>

        <h2>Comparison: AC Service Gurgaon vs Other Service Providers</h2>
        <table className={styles.comparisonTable}>
          <thead>
            <tr>
              <th>Features</th>
              <th>Other Service Providers</th>
              <th>AC Service Gurgaon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Experienced Technicians</strong></td>
              <td>May lack trained professionals</td>
              <td>Certified and experienced technicians</td>
            </tr>
            <tr>
              <td><strong>Service Quality</strong></td>
              <td>Basic cleaning and checkup</td>
              <td>Comprehensive servicing with deep cleaning</td>
            </tr>
            <tr>
              <td><strong>Pricing</strong></td>
              <td>Hidden charges, high costs</td>
              <td>Transparent pricing, affordable rates</td>
            </tr>
            <tr>
              <td><strong>Customer Support</strong></td>
              <td>Delayed response</td>
              <td>24/7 quick response and support</td>
            </tr>
            <tr>
              <td><strong>Genuine Spare Parts</strong></td>
              <td>May use duplicate parts</td>
              <td>Only genuine and high-quality spare parts</td>
            </tr>
            <tr>
              <td><strong>Warranty on Service</strong></td>
              <td>Limited or no warranty</td>
              <td>Service warranty for customer satisfaction</td>
            </tr>
            <tr>
              <td><strong>Doorstep Service</strong></td>
              <td>May delay home visits</td>
              <td>Same-day doorstep service</td>
            </tr>
            <tr>
              <td><strong>Eco-friendly Methods</strong></td>
              <td>Uses chemical-heavy cleaning</td>
              <td>Eco-friendly and safe cleaning solutions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.contactSection}>
        <p className={styles.tagline}>Book Your Split AC Service Today!</p>
        <p>Don’t let a poorly maintained AC affect your comfort and health. Contact AC Service Gurgaon today for expert servicing and keep your AC running smoothly all year round!</p>
        <div className={styles.buttonContainer}>
          <a href="tel:+91810954362" className={styles.contactButton}>Contact Now</a>
          <a href="tel:+917011132581" className={styles.callButton}>Call Now</a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default WindowACService;
