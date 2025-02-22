import React from "react";
import Link from "next/link";
import styles from "@/styles/Window.module.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const windowACSubcategories = [
  { name: "Split AC Service", image: "service.png", link: "/split-ac-services/service" },
  { name: "Split AC Installation/Uninstallation", image: "install.jpg", link: "/split-ac-services/install" },
  { name: "Split AC Gas Refilling", image: "gas.webp", link: "/split-ac-services/gas" },
  { name: "Split AC Other Work", image: "other.webp", link: "/split-ac-services/other" },
];

const SplitACPage = () => {
  return (
    <div>
      <Navbar />
      
      <div className={styles.header}>
        <h2>Choose Our Top-Rated, Reliable Gurgaon Split AC Repairing Services!</h2>
        <p>
          Repair, Service & Maintenance - All brand air conditioners repairing, installation, and servicing
          by AC Expert Technicians all over Gurgaon. As a Gurgaon resident, we know that the weather can be
          extremely hot even from the end of March till October. When the brutal summer heat arrives, you and
          your family find relief in a cool, split air-conditioned home. And when those winter months bring on
          the cold weather, you need a reliable heating system to keep your home warm and toasty. But what happens
          if your home’s heating or cooling system fails when you need it most?
        </p>
        <p>
          When you need air conditioning services in Gurgaon and the surrounding North areas, there’s only one
          Gurugram split AC services provider you need to know: AC Services Gurgaon. For over 10 years, customers
          in the Gurgaon or touching Delhi Faridabad area have turned to us because we have a track record of
          delivering quality products and superior service at an affordable price. We are a full-scale heating,
          split air conditioning, and repairing provider with expertise in installation, maintenance, and repair.
        </p>
        <p>
          We take pride in the quality workmanship we consistently deliver in all of our home and commercial services.
          Whether you need air conditioning repair in a retail outlet or a new furnace installed in a custom-built home,
          our technicians are experts. Our technicians possess the expertise to repair and service all brands of HVAC
          equipment in use today.
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
      <h3>WHy Choose Us?</h3>
        <p>
          At AC Services Gurgaon, we have a strong history of providing reliable solutions for
          your residential and commercial air conditioning, heating, and petroleum needs. We want to be the first—and
          last—call you make when hiring a Gurgaon-based company.
        </p>
        <p>
          If you’re looking for Gurgaon split air conditioning and repairing services, you can trust us to get the job
          done right at a fair price! Contact us today!
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default SplitACPage;