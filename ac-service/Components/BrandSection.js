import Image from "next/image";
import styles from "@/styles/BrandSection.module.css";

const BrandSection = () => {
  return (
    <div className={styles.brandSection}>
      <div className={styles.brandLogos}>
        <img
          src="BrandSection.png" // Corrected path
          alt="All Brand Logos"
        />
      </div>
      <div className={styles.brandInfo}>
        <h2>We deal with all major brands</h2>
        <p>
          Each brand has different fabrication. Dismantle and rebuild is not a
          trainee task. Our technicians have years of experience in old-to-old
          and latest-to-future technologies of air conditioners. AC maintenance
          is vital to ensuring your home is running at maximum efficiency,
          counteracting breakdowns during peak use, and keeping your air
          conditioner warranty legitimate. So we’ve planned our four service
          plans to meet your AC maintenance needs and your budget.
        </p>
      </div>
    </div>
  );
};

export default BrandSection;
