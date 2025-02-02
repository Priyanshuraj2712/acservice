import React from "react";
import styles from "@/styles/SatisfactionGuarantee.module.css";

const SatisfactionGuarantee = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          The Best You Can Get: Our 100% Satisfaction Guarantee
        </h2>
        <p className={styles.description}>
          For some warming and cooling repair service and establishment
          organizations, their assurance (on the off chance that they have one)
          keeps going about as long as it takes for the service tech to backpedal
          out to his truck. We see things a little in an unexpected way. We need
          your service involvement with Service Experts Heating and Air
          Conditioning in Gurgaon to be extraordinary compared to other service
          encounters you’ve ever had.
        </p>
        <p className={styles.description}>
          That is the reason we offer you the Service Experts 100% Satisfaction
          Guarantee. It’s hard to believe, but it’s true, 100%. What’s more, we
          offer it to you in writing.
        </p>

        <ul className={styles.benefitsList}>
          <li>✔ 100% Customer Satisfaction Guarantee</li>
          <li>✔ Quick and Reliable Service</li>
          <li>✔ Highly Skilled Technicians</li>
          <li>✔ Competitive and Transparent Pricing</li>
        </ul>
      </div>

      <div className={styles.imageContainer}>
        <img src="/satisfaction.jpg" alt="100% Satisfaction Guarantee" />
      </div>
    </div>
  );
};

export default SatisfactionGuarantee;
