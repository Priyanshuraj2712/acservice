import styles from "../styles/WhyChooseUs.module.css";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

const ChoosePage = () => {
  return (
    <div className={styles.whyChooseContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Why Choose Us?</h1>
        <p>Your Trusted Family AC Mechanic in Gurgaon</p>
      </section>

      {/* Reasons Grid */}
      <section className={styles.reasons}>
        {[
          "No hidden fees – honest, upfront pricing!",
          "Certified, factory-trained technicians.",
          "We ensure proper manufacturer installation.",
          "Free consultations & designs for new systems.",
          "Flexible financing options available.",
          "Repair-first approach – no unnecessary replacements.",
          "Clean & efficient service, no mess left behind!",
          "Protective covers used to keep floors safe.",
          "Family-owned business with deep local roots.",
          "Customer respect is our core motto!"
        ].map((reason, index) => (
          <div key={index} className={styles.reasonItem}>
            <FaCheckCircle className={styles.icon} />
            <p>{reason}</p>
          </div>
        ))}
      </section>

      {/* Our Work Section */}
      <section className={styles.ourWork}>
        <h2>Our Work</h2>
        <p>
          ACservicesGurgaon is your all-in-one residential and commercial Air Conditioning service provider in Gurgaon.
          Whether you need scheduled maintenance, air quality solutions, or AC repair & installation, we have got you covered!
        </p>
      </section>

      {/* Core Values Section */}
      <section className={styles.coreValues}>
        <h2>Core Values</h2>
        <p>
          We provide AC repair & services for all major brands in Gurgaon. Our goal is not to sell unnecessary services
          but to earn your trust by providing quality repair and installation at affordable prices.
        </p>
      </section>

      {/* Call-To-Action */}
      <section className={styles.cta}>
        <h2>Need AC Service?</h2>
        <p>Call us today for quick, reliable, and affordable AC service!</p>
        <a href="tel:+919810954362" className={styles.callBtn}>
          <FaPhoneAlt /> Call Now
        </a>
      </section>
    </div>
  );
};

export default ChoosePage;
