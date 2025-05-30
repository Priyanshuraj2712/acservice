import React from "react";
import Link from "next/link"; // Only for Next.js
import styles from "@/styles/ACCard.module.css";

const acTypes = [
  { name: "Window AC", image: "/window.jpg", link: "/window-ac-services-gurgaon" },
  { name: "Split AC", image: "/split.jpg", link: "/split-ac-services" },
  { name: "Cassette AC", image: "/cassette.jpg", link: "/cassette-ac-services-gurgaon" },
  { name: "Ductable AC", image: "/ductable.jpg", link: "/ducting-ac-services-gurgaon" },
  { name: "VRV/VRF AC", image: "/vrv.jpg", link: "/vrv-ac-services-gurgaon" },
  { name: "Tower AC", image: "/tower.jpg", link: "/tower-ac-services-gurgaon" },
  { name: "Copper Pipe Fitting", image: "/copper.jpg", link: "/copper-pipe-fitting" },
  { name: "AHU AC", image: "/AHU.jpg", link: "/ahu-ac-services-gurgaon" },
  { name: "AC On Rent", image: "/package.jpg", link: "/ac-on-rent" },
];

const ACCards = () => {
  return (
    <div>
      {/* Header Section */}
      <div className={styles.header}>
        <h2>One Call Away From Your AC Doctor</h2>
        <p>
          AC Services Gurgaon has expertise solutions for your Air Conditioners.
          We maintain them perfectly, and you don’t need to worry about your AC problems like uneven cooling or other issues.
          We take care of your air-conditioners by providing proper installation and servicing, so you don’t have to stress about their repairs.
          You’re just a call away from your AC doctor.
        </p>
      </div>

      {/* Card Section */}
      <div className={styles.cardContainer}>
        {acTypes.map((ac, index) => (
          <Link key={index} href={ac.link} passHref>
            <button className={styles.card}>
              <img
                src={ac.image}
                alt={`${ac.name} Illustration`}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{ac.name}</h3>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ACCards;
