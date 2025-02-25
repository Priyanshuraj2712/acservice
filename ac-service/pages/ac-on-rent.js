import React from "react";
import Link from "next/link";
import styles from "@/styles/Rent.module.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

const windowACSubcategories = [
  { name: "Split AC On Rent", image: "rent_split.jpeg", link: "/split-ac-on-rent" },
  { name: "Window AC On Rent", image: "rent_window.jpeg", link: "/window-ac-on-rent" },
];

const SplitACPage = () => {
  return (
    <div>
      <Navbar />

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

      <div className={styles.header}>
        <h2>Why Choose ACServiceGurgaon.com for AC Rental – Window & Split ACs</h2>
      </div>

      <div className={styles.content}>
        <p>
          Are you looking to rent an AC in Gurgaon? Whether it’s a window AC or a split AC, renting is a smart and cost-effective option, especially if you’re living temporarily in the city or don’t want to invest in a new unit. When it comes to hassle-free AC rentals, ACServiceGurgaon.com is your go-to solution. Here’s why:
        </p>

        <h3>1. Wide Range of ACs for Rent</h3>
        <p>
          ACServiceGurgaon.com offers a variety of air conditioners, including window ACs and split ACs, from top brands. Whether you need an AC for your home, office, or any commercial space, you’ll find the right fit according to your budget and cooling requirements.
        </p>
        
        <h3>2. Affordable Rental Plans</h3>
        <p>
          Renting an AC should not break the bank! With flexible rental plans, you can choose from short-term and long-term options. The pricing is transparent, with no hidden costs, ensuring affordability for everyone.
        </p>
        
        <h3>3. Quick & Hassle-Free Installation</h3>
        <p>
          Once you rent an AC from ACServiceGurgaon.com, the team ensures quick delivery and professional installation at your location. Their trained technicians handle the installation process smoothly, ensuring proper cooling and efficiency.
        </p>
        
        <h3>4. Regular Maintenance & Support</h3>
        <p>
          Unlike purchasing an AC where you need to arrange separate servicing, renting from ACServiceGurgaon.com comes with free or low-cost maintenance. The company provides regular servicing, cleaning, and troubleshooting to ensure your AC works perfectly throughout the rental period.
        </p>
        
        <h3>5. Energy-Efficient & Well-Maintained ACs</h3>
        <p>
          All the rental ACs are energy-efficient and well-maintained, ensuring low electricity consumption and high performance. You don’t have to worry about old or faulty units, as each AC is checked before delivery.
        </p>
        
        <h3>6. No Long-Term Commitment</h3>
        <p>
          If you’re in Gurgaon for a short time or only need an AC for a season, renting is the perfect option. ACServiceGurgaon.com offers flexible rental durations, allowing you to return the AC when you no longer need it without any penalties.
        </p>
        
        <h3>7. Easy Booking & Prompt Customer Support</h3>
        <p>
          Booking an AC rental is simple with ACServiceGurgaon.com. You can rent an AC online or via a phone call, and their customer support team is always available to assist you with queries, installations, and servicing.
        </p>

        <h3>How to Rent an AC from ACServiceGurgaon.com?</h3>
        <ol>
          <li>Visit ACServiceGurgaon.com and browse through the available AC options.</li>
          <li>Choose between a window AC or a split AC based on your cooling needs.</li>
          <li>Select your preferred rental duration and budget-friendly plan.</li>
          <li>Place your order online or call their support team.</li>
          <li>Get doorstep delivery, installation, and maintenance services without any hassle!</li>
        </ol>

        <h3>Final Thoughts</h3>
        <p>
          Renting an AC in Gurgaon has never been easier! With ACServiceGurgaon.com, you get reliable, affordable, and energy-efficient ACs without worrying about maintenance or hefty upfront costs. Whether you need a window AC or a split AC, they provide the best rental services with complete customer satisfaction.
        </p>
        <p>
          So, why wait? Visit ACServiceGurgaon.com today and book your AC rental now!
        </p>
      </div>

      <Footer />
      <WhatsAppToggle />
    </div>
  );
};

export default SplitACPage;
