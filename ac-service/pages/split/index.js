import React from "react";
import Link from "next/link";
import styles from "@/styles/Window.module.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const windowACSubcategories = [
  { name: "Split AC Service", image: "service.png", link: "/split/service" },
  { name: "Split AC Installation/Uninstallation", image: "install.jpg", link: "/split/install" },
  { name: "Split AC Gas Refilling", image: "gas.webp", link: "/split/gas" },
  { name: "Split AC Other Work", image: "other.webp", link: "/split/other" },
];

const SplitACPage = () => {
  return (
    <div>
      <Navbar />
      
      <div className={styles.header}>
        <h2>Split AC Services</h2>
        <p>
          We provide expert services for your Split AC, ensuring it functions efficiently 
          and keeps your space cool. Whether its installation, repair, gas refilling, or other maintenance work, 
          we’ve got you covered.
        </p>
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

      <div className={styles.additionalInfo}>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>✔ Certified and Experienced Technicians</li>
          <li>✔ Affordable and Transparent Pricing</li>
          <li>✔ Fast and Reliable Services</li>
          <li>✔ 24/7 Customer Support</li>
          <li>✔ 100% Customer Satisfaction</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default SplitACPage;