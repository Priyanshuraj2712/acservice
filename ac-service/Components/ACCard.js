import React from "react";
import styles from "@/styles/ACCard.module.css";

const acTypes = [
  { name: "Window AC", image: "window.jpg" },
  { name: "Split AC", image: "split.jpg" },
  { name: "Cassette AC", image: "cassette.jpg" },
  { name: "Ductable AC", image: "ductable.jpg" },
  { name: "VRV/VRF AC", image: "vrv.jpg" },
  { name: "Tower AC", image: "tower.jpg" },
  { name: "Copper Pipe Fitting", image: "copper.jpg" },
  { name: "AHU/CFU AC", image: "AHU.jpg" },
  { name: "Package AC", image: "package.jpg" },
];

const ACCards = () => {
  const handleClick = (acName) => {
    alert(`You clicked on ${acName}`);
  };

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
          <button key={index} className={styles.card} onClick={() => handleClick(ac.name)}>
            <img
              src={ac.image}
              alt={`${ac.name} Illustration`}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{ac.name}</h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ACCards;
