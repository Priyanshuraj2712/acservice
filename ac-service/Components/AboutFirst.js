import Image from "next/image";
import styles from "@/styles/About.module.css"; // Importing CSS module
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
const AboutUs = () => {
  return (
    <>
 
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <Image
          src="/hvac-service-gurgaon.jpg" // Ensure the image is in the public folder
          alt="AC Repair Services"
          layout="fill"
          objectFit="cover"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h1>About Us</h1>
          <p>Best AC Mechanic In Gurgaon</p>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <h2>Our Story</h2>
        <p>
          We are dedicated to offering our clients fast, affordable, and
          professional appliance repair services. Resolving appliance repair
          issues in a timely and affordable manner is our #1 goal. Call us today
          for any major appliance repairs in your home.
        </p>
        <p>
          Our prices are competitive, and we guarantee our work. If you need
          professional appliance repair at your home in Gurgaon, <a href="https://acservicegurgaon.com/contact-us" rel="noopener noreferrer" className={styles.linking}>Contact us</a> via
          Phone, Email, or schedule a service online.
        </p>

        {/* Skill Bars */}
        <div className={styles.skillsContainer}>
          <div className={styles.skillsColumn}>
            <SkillBar title="Window AC" percentage={98} />
            <SkillBar title="Split AC" percentage={100} />
            <SkillBar title="Cassette AC" percentage={100} />
          </div>
          <div className={styles.skillsColumn}>
            <SkillBar title="Ductable AC" percentage={100} />
            <SkillBar title="VRV/VRF AC" percentage={100} />
            <SkillBar title="Tower AC" percentage={100} />
          </div>
          <div className={styles.skillsColumn}>
            <SkillBar title="Copper Pipe Fitting" percentage={100} />
            <SkillBar title="AHU/CFU AC" percentage={100} />
            <SkillBar title="package AC" percentage={100} />
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

// Progress Bar Component
const SkillBar = ({ title, percentage }) => {
  return (
    <div className={styles.skillBar}>
      <div className={styles.skillLabel}>
        <span>{title}</span>
        <span>{percentage}%</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
    
  );
};

export default AboutUs;
