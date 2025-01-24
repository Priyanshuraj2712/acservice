import React from "react";
import styles from "@/styles/ACCard.module.css";

const acTypes = [
  { name: "Window AC", image: "window.jpeg" },
  { name: "Split AC", image: "split.jpeg" },
  { name: "Cassette AC", image: "cassette.jpg" },
  { name: "Ductable AC", image: "ductable.jpeg" },
  { name: "VRV/VRF AC", image: "vrv.jpg" },
  { name: "Tower AC", image: "tower.webp" },
  { name: "Copper Pipe Fitting", image: "copper.webp" },
  { name: "AHU/CFU AC", image: "AHU.jpg" },
  { name: "Package AC", image: "package.webp" },
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
          <div key={index} className={styles.card}>
            <img
              src={ac.image}
              alt={`${ac.name} Illustration`}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{ac.name}</h3>
              <button className={styles.cardButton}>Know More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ACCards;