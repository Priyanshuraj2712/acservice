import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Window.module.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

const splitACSubcategories = [
  { name: "Split AC Service", image: "SplitService.jpg", link: "/split-ac-services/service" },
  { name: "Split AC Installation/Uninstallation", image: "SplitInstall.jpg", link: "/split-ac-services/install" },
  { name: "Split AC Gas Refilling", image: "SplitGas.jpg", link: "/split-ac-services/gas" },
  { name: "Split AC Other Work", image: "SplitOther.jpg", link: "/split-ac-services/other" },
];

const SplitACPage = () => {
  return (
    <div>
      <Head>
        <title>Best Split AC Services in Gurgaon | Repair & Installation</title>
        <meta name="description" content="Expert Split AC repair, service, and installation in Gurgaon. Get fast and reliable AC solutions from our professional technicians." />
        <meta name="keywords" content="Split AC service Gurgaon, Split AC repair, AC installation Gurgaon, AC maintenance Gurgaon" />
        <meta property="og:title" content="Best Split AC Services in Gurgaon | Repair & Installation" />
        <meta property="og:description" content="Need Split AC repair or installation in Gurgaon? Contact our expert technicians for professional and affordable AC services today!" />
        <meta property="og:url" content="https://acservicegurgaon.com/split-ac-services" />
      </Head>

      <Navbar />
      
      <div className={styles.header}>
        <h2>Choose Our Top-Rated, Reliable Gurgaon Split AC Repairing Services!</h2>
      </div>

      <div className={styles.cardContainer}>
        {splitACSubcategories.map((sub, index) => (
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
        <p>
          Repair, Service & Maintenance - We provide expert repair, installation, and servicing for all Split AC brands across Gurgaon.
          Our experienced technicians ensure your AC operates efficiently, keeping you comfortable throughout the seasons.
        </p>
        <p>
          With over 10 years of experience, we have built a reputation for delivering high-quality AC services at competitive prices.
          Whether you need emergency AC repairs or routine maintenance, our team is always ready to assist you.
        </p>
        <p>
          Our professional team specializes in diagnosing and fixing all AC-related issues, from gas refilling to full-scale installations.
          We cater to both residential and commercial clients, ensuring top-notch services tailored to your needs.
        </p>
        <p>
          Contact us today for expert AC services in Gurgaon! <Link href="/contact-us" className={styles.linking}>Get in Touch</Link> or call us at
          <a href="tel:+919810954362" className={styles.linking}> +91 9810954362</a>.
        </p>
      </div>

      <Footer />
      <WhatsAppToggle />
    </div>
  );
};

export default SplitACPage;
