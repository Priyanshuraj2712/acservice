import React from "react";
import Link from "next/link";
import styles from "@/styles/Window.module.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const windowACSubcategories = [
  { name: "Window AC Service", image: "service.png", link: "/window/service" },
  { name: "Window AC Installation/Uninstallation", image: "install.jpg", link: "/window/install" },
  { name: "Window AC Gas Refilling", image: "gas.webp", link: "/window/gas" },
  { name: "Window AC Other Work", image: "other.webp", link: "/window/other" },
];

const WindowACPage = () => {
  return (
    <div>
      <Navbar />
      
      <div className={styles.header}>
        <h2>Why Choose For Window AC Servicing Regular?</h2>
        <ul>
          <li><strong>Expert Technicians:</strong> Our team is well-trained and experienced in handling all AC brands.</li>
          <li><strong>Affordable & Transparent Pricing:</strong> No hidden costs; get quality service at budget-friendly rates.</li>
          <li><strong>Quick & Reliable Service:</strong> Get same-day service for hassle-free AC maintenance.</li>
          <li><strong>Customer Satisfaction Guarantee:</strong> We ensure 100% customer satisfaction with our service warranty.</li>
        </ul>
      </div>
    
      <div className={styles.cardContainer}>
        {windowACSubcategories.map((sub, index) => (
          <Link key={index} href={sub.link} passHref>
            <button className={styles.card}>
              <img src={sub.image} alt={`${sub.name} Illustration`} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{sub.name}</h3>
              </div>
            </button>
          </Link>
        ))}
      </div>
      
      <div className={styles.comparisonTable}>
        <h3>Comparison: AC Service Gurgaon vs Other Service Providers</h3>
        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>Other Service Providers</th>
              <th>AC Service Gurgaon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Experienced Technicians</td>
              <td>May lack trained professionals</td>
              <td>Certified and experienced technicians</td>
            </tr>
            <tr>
              <td>Service Quality</td>
              <td>Basic cleaning and checkup</td>
              <td>Comprehensive servicing with deep cleaning</td>
            </tr>
            <tr>
              <td>Pricing</td>
              <td>Hidden charges, high costs</td>
              <td>Transparent pricing, affordable rates</td>
            </tr>
            <tr>
              <td>Customer Support</td>
              <td>Delayed response</td>
              <td>24/7 quick response and support</td>
            </tr>
            <tr>
              <td>Genuine Spare Parts</td>
              <td>May use duplicate parts</td>
              <td>Only genuine and high-quality spare parts</td>
            </tr>
            <tr>
              <td>Warranty on Service</td>
              <td>Limited or no warranty</td>
              <td>Service warranty for customer satisfaction</td>
            </tr>
            <tr>
              <td>Doorstep Service</td>
              <td>May delay home visits</td>
              <td>Same-day doorstep service</td>
            </tr>
            <tr>
              <td>Eco-friendly Methods</td>
              <td>Uses chemical-heavy cleaning</td>
              <td>Eco-friendly and safe cleaning solutions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.callToAction}>
        <h3>Book Your Window AC Service Today!</h3>
        <p>Don’t let a poorly maintained AC affect your comfort and health. Contact AC Service Gurgaon today for expert servicing and keep your AC running smoothly all year round!</p>
      </div>

      <Footer />
    </div>
  );
};

export default WindowACPage;
