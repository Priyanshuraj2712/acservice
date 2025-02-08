import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from "@/styles/Split-ac.module.css";

const SplitAcOnRent = () => {
  return (
    <>
      <Navbar />
      <div className={styles.banner}>
        <h1>Split AC on rent in Gurgaon
        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/rent_split.jpeg"
                alt="Split AC Installation"
              />
            </div>
            <div className={styles.blogPostMeta}>
              <span className={styles.author}>
                by acservicegurgaon | May 2, 2024
              </span>
              <span className={styles.categories}>
                Cassette AC, Ducting AC, Split AC, Uncategorized, Window AC
              </span>
            </div>
          </div>

          <div className={styles.blogContent}>
            <h1 className={styles.heading}>Split AC on Rent in Gurgaon</h1>
            <p>
              <strong>by acservicegurgaon | Jan 25, 2024 | Split AC | 0 comments</strong>
            </p>
            <p>
              ACServiceGurgaon.com stands out as the preferred choice for those seeking
              reliable and efficient split ACs on rent in Gurgaon.
            </p>

            <h2>How to Rent a Split AC with ACServiceGurgaon.com</h2>
            <ul>
              <li>
                <strong>Visit the Website:</strong> Head to ACServiceGurgaon.com and
                browse through their selection of split ACs.
              </li>
              <li>
                <strong>Choose Your Plan:</strong> Select a rental plan that suits your
                budget and cooling needs.
              </li>
              <li>
                <strong>Enjoy Hassle-Free Cooling:</strong> Professional installation and
                regular maintenance ensure a smooth experience.
              </li>
            </ul>

            <h2>Why Choose ACServiceGurgaon.com for Split AC Rentals?</h2>
            <ul>
              <li>
                <strong>Wide Range of Top-Tier Split ACs:</strong> Offers various models
                for different room sizes and needs.
              </li>
              <li>
                <strong>Cutting-Edge Technology:</strong> Advanced cooling features
                ensure superior performance.
              </li>
              <li>
                <strong>Flexible Rental Plans:</strong> Multiple rental durations to
                match your budget and requirements.
              </li>
              <li>
                <strong>Professional Installation and Maintenance:</strong> Expert
                technicians handle installation and upkeep.
              </li>
              <li>
                <strong>Transparent Pricing:</strong> No hidden costs, ensuring
                affordability and reliability.
              </li>
            </ul>

            <h2>Contact Information</h2>
            <p>
              <strong>Website:</strong> <a href="https://acservicegurgaon.com">ACServiceGurgaon.com</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:7011132581">7011132581</a>
            </p>

            <h2>Submit a Comment</h2>
            <form className={styles.commentForm}>
              <textarea placeholder="Comment *" required></textarea>
              <input type="text" placeholder="Name *" required />
              <input type="email" placeholder="Email *" required />
              <input type="text" placeholder="Website" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SplitAcOnRent;
