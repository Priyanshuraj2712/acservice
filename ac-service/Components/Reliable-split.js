import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from "@/styles/best-split-ac.module.css";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Link from "next/link";

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
        <h1>Choose Our Top-Rated, Reliable Split AC repairing Services in Gurgaon
        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/reliable-split-ac.webp"
                alt="Ac Repair"
              />
            </div>
            <div className={styles.blogPostMeta}>
              <span className={styles.author}>by acservicegurgaon | Mar 30, 2018</span>
              <span className={styles.categories}>
                 Uncategorized
              </span>
            </div>
          </div>

          <div className={styles.blogPostContent}>
            <h2> Choose Our Top-Rated, Reliable Split AC repairing Services in Gurgaon


            </h2>
            <p>
            <b>Repair, Service & Maintenance All brand air conditioners repairing, installation and servicing by AC Experts Technicians in all over Gurgaon.</b> As a Gurgaon resident, we know that the weather can be extremely hot even from end of march till October. When the brutal summer heat arrives, you and your family find relief in a cool, split air conditioned home. And when those winter months bring on the cold weather Floridians hate, you need a reliable heating system to keep your home warm and toasty. But what happens if your home’s heating or cooling system fails when you need it most?
            </p>

            <p>
            When you need air conditioning services in Gurgaon and the surrounding North areas, there’s only one Gurugram  split ac services provider you need to know: ac repair gurgaon. For over 10 years, customers in the Gurgaon or touching delhi faridabad area have turned to us because we have a track record of delivering quality products and superior service at an affordable price. We are a full-scale heating, split air conditioning, repairing provider and have expertise delivering expert split ac service including installation, maintenance, and repair.
            </p>


            <h2>Split ac repair GURGAON
            </h2>
            <p>
            We take pride in the quality workmanship we consistently deliver in all of our home and commercial services. Whether you need air conditioning repair in a retail outlet or a new furnace installed in a custom-built home, our technicians are experts.Our technicians possess the expertise to repair and service all brands of HVAC equipment in use today. At ac repair gurgaon, we have a strong history of providing reliable solutions for your residential and commercial air conditioning, heating, and petroleum needs. We want to be the first—and last—call you make when hiring an gurgaon based company.
            </p>

            
            <p>
            <b>
        If you’re looking for Gurgaon split air conditioning and repairing services, 
        you can trust us to get the job done right at a fair price!{' '}
        <Link href="/contact-us">
          Contact us
        </Link>{' '}
        today!
      </b>         </p>

            
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