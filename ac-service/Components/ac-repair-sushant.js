import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from "@/styles/best-split-ac.module.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

const BlogPost = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_539k4ug", // Replace with your EmailJS Service ID
        "template_g476641", // Replace with your EmailJS Template ID
        formRef.current,
        "V_RaldyQDJMOvR2nj" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Comment sent successfully!");
        },
        (error) => {
          alert("Failed to send comment.");
        }
      );
  };
  return (
    <>
      <Navbar />
      <div className={styles.banner}>
        <h1>AC Repair and Services Sushant Lok Gurgaon

        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/ac-repair-sushant-lok.jpg"
                alt="Ac Repair"
              />
            </div>
            <div className={styles.blogPostMeta}>
              <span className={styles.author}>by acservicegurgaon | May 2, 2024</span>
              <span className={styles.categories}>
                Cassette Ac, Ducting Ac, Split Ac, Uncategorized, Window Ac
              </span>
            </div>
          </div>

          <div className={styles.blogPostContent}>
            <h2>AC Repair and Services Sushant Lok
            </h2>
            <p>
            We are AC Services Gurgaon working in AC Repair and Services in Sushant Lok Gurgaon from 2008. We offer services & repairing for All types of Air conditioners like split AC services in Sushant Lok and Window AC Services in Sushant Lok, provides all services from installation to after-sales services Our reach is in whole Gurgaon. you can contact us today for Expert Services. 
            </p>

            <h2>
  Look no further.{" "}
  <a href="tel:+91810954362" style={{ color: "orange", fontWeight: "bold", textDecoration: "none" }}>
    Call us
  </a>{" "}
  now!!
</h2>
            

            <p>The leading AC Repair and Services Sushant Lok Gurgaon offer solutions all range to individual and commercial purposes. Together with professional experts, we have the best AC repair and services, technicians. With more than 500+ satisfied clients in Gurgaon, we have been in the air conditioning business for the last 16 years. The first goal for us is our customer loyalty & happiness. At an incredibly inexpensive & fair price, we provide air conditioning facilities.</p>

            <h2>Best Air Conditioning Services in Sushant Lok Gurgaon
            </h2>
            <p>ACServiceGurgaon Provides Best Ac Installation in Sushant Lok Gurgaon for the last 10+years. We provide Ac Installation in Sushant Lok Gurgaon at an Extremely Affordable & Reasonable Cost. The installation of the split air conditioners is the most important part. If it is done properly your air conditioner will give you optimum performance, but if it is not done properly you won’t get the desired cooling effect and there may be frequent maintenance problems.</p>

            

            


            
          </div>

          <div className={styles.commentSection}>
            <h3>Leave a Comment</h3>
            <form ref={formRef} className={styles.commentForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className={styles.formGroup}>
                <label>Comment</label>
                <textarea name="comment" placeholder="Your Comment" required></textarea>
              </div>
              <button className={styles.submitBtn} type="submit">
                Submit Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;