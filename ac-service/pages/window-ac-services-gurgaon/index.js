import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Window.module.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

const windowACSubcategories = [
  { name: "Window AC Service", image: "WindowService.png", link: "/window-ac-services-gurgaon/service" },
  { name: "Window AC Installation/Uninstallation", image: "WindowInstall.png", link: "/window-ac-services-gurgaon/install" },
  { name: "Window AC Gas Refilling", image: "WindowGas.png", link: "/window-ac-services-gurgaon/gas" },
  { name: "Window AC Other Work", image: "WindowOther.jpg", link: "/window-ac-services-gurgaon/other" },
];

const WindowACPage = () => {
  return (
    <div>
      <Head>
        <title>Best Window AC Services in Gurgaon | Repair & Installation</title>
        <meta name="description" content="Get expert Window AC repair, servicing, and installation in Gurgaon. Trusted technicians, quick service, and affordable pricing. Call now!" />
        <meta name="keywords" content="Window AC service Gurgaon, AC repair Gurgaon, Window AC installation, best AC service Gurgaon" />
        <meta property="og:title" content="Best Window AC Services in Gurgaon | Repair & Installation" />
        <meta property="og:description" content="Need Window AC service in Gurgaon? We provide fast and reliable AC repair, installation, and gas refilling. Contact us today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acservicegurgaon.com/window-ac-services-gurgaon" />
        <meta property="og:image" content="https://acservicegurgaon.com/images/window-ac-service.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Window AC Services in Gurgaon | Repair & Installation" />
        <meta name="twitter:description" content="Professional Window AC service in Gurgaon. Book expert repair and installation services today!" />
      </Head>

      <Navbar />

      <div className={styles.header}>
        <h2>Window AC Services</h2>
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
        <p>
          We provide repair, service, and maintenance for all Window AC brands in Gurgaon, including LG, Samsung, Daikin, Carrier, Blue Star, Voltas, Videocon, and Onida.
          Our expert AC mechanics ensure your air conditioning system functions optimally. We use state-of-the-art tools and technology to diagnose and fix even the smallest problems.
        </p>
        <p>
          With over ten years of experience, we offer top-quality AC services, maintenance, and installations, including gas refilling for residential and commercial customers in Gurgaon.
          Whether you need an urgent AC repair or a complete replacement, our team is here to help.
        </p>
        <p>
          Need fast and reliable AC service in Gurgaon? Contact us today at
          <a href="tel:+919810954362" className={styles.linking}> +91 9810954362</a> or visit our <Link href="/contact-us" className={styles.linking}>Contact Page</Link> to schedule an appointment.
        </p>
      </div>

      <Footer />
      <WhatsAppToggle />
    </div>
  );
};

export default WindowACPage;
