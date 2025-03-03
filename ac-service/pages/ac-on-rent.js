import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Rent.module.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

const windowACSubcategories = [
  { name: "Split AC On Rent", image: "rent_split.jpg", link: "/split-ac-on-rent" },
  { name: "Window AC On Rent", image: "rent_window.jpg", link: "/window-ac-on-rent" },
];

const SplitACPage = () => {
  return (
    <div>
      <Head>
        <title>AC on Rent in Gurgaon | Split & Window AC Rental Services</title>
        <meta 
          name="description" 
          content="Affordable AC rental services in Gurgaon. Rent split and window ACs with quick installation, maintenance, and flexible rental plans. Call now for doorstep service!" 
        />
        <meta 
          name="keywords" 
          content="AC on rent Gurgaon, Split AC rental Gurgaon, Window AC on rent, AC rental services, AC lease Gurgaon, Rent AC online" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AC Service Gurgaon" />
        <link rel="canonical" href="https://acservicegurgaon.com/ac-on-rent" />
      </Head>

      <Navbar />
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
        <h2>
          Why Choose <a href="https://acservicegurgaon.com" rel="noopener noreferrer" className={styles.linking}>acservicegurgaon.com</a> for AC Rental?
        </h2>
        <p>
          Looking to rent an AC in Gurgaon? Whether you need a window or split AC, renting is a cost-effective solution. At 
          <a href="https://acservicegurgaon.com" rel="noopener noreferrer" className={styles.linking}> acservicegurgaon.com</a>, we offer the best AC rental services.
        </p>

        <h3>1. Wide Range of ACs for Rent</h3>
        <p>Choose from a variety of top-brand window and split ACs.</p>

        <h3>2. Affordable Rental Plans</h3>
        <p>Flexible pricing with no hidden costs.</p>

        <h3>3. Quick & Hassle-Free Installation</h3>
        <p>Professional technicians ensure seamless setup.</p>

        <h3>4. Regular Maintenance & Support</h3>
        <p>Enjoy free or low-cost maintenance throughout the rental period.</p>

        <h3>5. Energy-Efficient & Well-Maintained ACs</h3>
        <p>All rental units are thoroughly checked for efficiency.</p>

        <h3>6. No Long-Term Commitment</h3>
        <p>Flexible rental durations to suit your needs.</p>

        <h3>7. Easy Booking & Customer Support</h3>
        <p>Book online or via phone with 24/7 customer assistance.</p>

        <h3>How to Rent an AC?</h3>
        <ul className={styles.styledList}>
          <li>Visit acservicegurgaon.com and choose an AC.</li>
          <li>Select rental duration and budget-friendly plan.</li>
          <li>Place your order online or call our support team.</li>
          <li>Get doorstep delivery, installation, and maintenance.</li>
        </ul>

        <h3>Book Your AC Rental Today!</h3>
        <p>Enjoy cool summers with our hassle-free AC rental services.</p>
      </div>

      <div className={styles.contactSection}>
        <p className={styles.tagline}>100% convenience with 0 hassle.</p>
        <div className={styles.buttonContainer}>
          <Link href="/contact-us" className={styles.contactButton}>Contact Now</Link>
          <a href="tel:+917011132581" className={styles.callButton}>Call Now</a>
        </div>
      </div>

      <Footer />
      <WhatsAppToggle />
    </div>
  );
};

export default SplitACPage;
