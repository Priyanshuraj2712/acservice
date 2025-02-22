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
        <h1>Window & Split AC Repair & Gas Filling Service


        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/ac-repair-service_DLF.jpg"
                alt="Ac Repair"
              />
            </div>
            <div className={styles.blogPostMeta}>
              <span className={styles.author}>by acservicegurgaon | Feb 10, 2021</span>
              <span className={styles.categories}>
              Split Ac, Window Ac
              </span>
            </div>
          </div>

          <div className={styles.blogPostContent}>
            <h2>Window & Split AC Repair & Gas Filling Service in DLF Phase 1 Gurgaon

            </h2>
            <p>
            When we have harsh weather conditions today, air conditioners offer warmth so that you feel more relaxed. Air conditioners increase the consistency of indoor air and create a healthy environment. Do you need an AC repair in DLF phase 1 Gurgaon? Check out the best AC service in Gurgaon DLF Phase 1.
            </p>

            <h2>
  Look no further.{" "}
  <a href="tel:+91810954362" style={{ color: "orange", fontWeight: "bold", textDecoration: "none" }}>
    Call us
  </a>{" "}
  now!!
</h2>
            

            <p>
            We are the best ac service and repair experts in Gurgaon. We Provide AC repair, Gas filling, AC installation at very affordable prices. We have quick service all over the Gurgaon and nearby places. We have the best ac repair service in DLF Phase 1. You can call us anytime, no appointment, Get Services within 4 hours or same day
            </p>
            <p>
            AC SERVICES GURGAON offers the best ac installation and repair services in DLF Phase 1 Gurgaon at the most affordable prices. We are a one-stop solution for all your AC servicing needs in Gurgaon DLF Phase 1 as the last thing you would want on a really hot summer day is to switch on your air conditioner, only to find that it doesn’t work. Our AC technicians are highly professional and fix any issue with your air conditioner easily. We operate 24/7 and offer phone/online booking facilities for the convenience of the customers. Also, We provide prompt, professional, and honest AC Installation/Uninstallation Service and AC Repairing Services to all varieties of ACs like window AC, Split AC & Cassette AC to top brands air conditioners. Our specialty includes timely service, affordable prices, verified professional experts & great offers. Book our AC service today to get your AC fixed or repaired. Keep your AC cooling all summer with the Best AC Repair and Service in Gurgaon DLF Phase 1 with our expertise.
            </p>

            <h2>We repair & services all major brand in DLF PHASE 1 GURGAON
            </h2>
            <p>
            Each brand is built differently. It is not a trainee assignment to dismantle and re-build. Our technicians have years of experience in air environments from old to old and from modern to future technology. To ensure that your home is operating at optimum performance, counteracting breakdowns during peak use, and keeping your air conditioner warranty legitimate, AC maintenance is crucial.
            </p>

            
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