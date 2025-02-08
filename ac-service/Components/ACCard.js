import React from "react";
import Link from "next/link"; // Only for Next.js
import styles from "@/styles/ACCard.module.css";

const acTypes = [
  { name: "Window AC", image: "window.jpg", link: "/window" },
  { name: "Split AC", image: "split.jpg", link: "/split" },
  { name: "Cassette AC", image: "cassette.jpg", link: "/cassette" },
  { name: "Ductable AC", image: "ductable.jpg", link: "/ductable" },
  { name: "VRV/VRF AC", image: "vrv.jpg", link: "/vrv" },
  { name: "Tower AC", image: "tower.jpg", link: "/tower" },
  { name: "Copper Pipe Fitting", image: "copper.jpg", link: "/fitting" },
  { name: "AHU/CFU AC", image: "AHU.jpg", link: "/ahu" },
  { name: "Window/Split AC On Rent", image: "package.jpg", link: "/blog" },
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
