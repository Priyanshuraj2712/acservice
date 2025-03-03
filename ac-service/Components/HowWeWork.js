import React from 'react';
import styles from "@/styles/HowWeWork.module.css";

const HowWeWork = () => {
  const steps = [
    {
      title: "Call Receive",
      description: "Fill the easy form so we can contact you, or receive direct call.",
      icon: "/icon1.png", // Replace with actual image path
    },
    {
      title: "Feed Entry",
      description: "Our top notch customer service reps with schedule the next available appliance service appointment for you.",
      icon: "/icon2.png", // Replace with actual image path
    },
    {
      title: "In-house Tech",
      description: "Our strategy is to arrive on time and then diagnose, repair, and leave our clients with a smile.",
      icon: "/icon3.png", // Replace with actual image path
    },
    {
      title: "Happy Call",
      description: "We are calls made to our customers right after you’ve been there to do service or install work.",
      icon: "/icon4.png", // Replace with actual image path
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>How we work?</h2>
      <p className={styles.subheading}>
        We strive to accomplish that goal by providing you with fast, reliable, and affordable
        service on all major appliances and air conditioning.
      </p>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <img src={step.icon} alt={step.title} className={styles.icon} />
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
