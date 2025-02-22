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
        <h1>CAN AN HVAC SYSTEM INCREASE THE VALUE OF YOUR HOME?
        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/hvac-increases-home-value.jpg"
                alt="Ac Repair"
              />
            </div>
            <div className={styles.blogPostMeta}>
              <span className={styles.author}>by acservicegurgaon | Feb 12, 2018</span>
              <span className={styles.categories}>
              Cassette Ac, Ducting Ac, Split Ac, Window Ac
              </span>
            </div>
          </div>

          <div className={styles.blogPostContent}>
            <h2> CAN AN HVAC SYSTEM INCREASE THE VALUE OF YOUR HOME?


            </h2>
            <p>
            A home’s property value is subject to many variables, and many can be altered by the homeowner with a renovated kitchen or bath, new and improved roof with functioning gutters, crisp paint, and more. These maintenance tasks must be completed for a home to be up-to-date and increase the value of the property. When a home does not go through proper, scheduled renovations, the property value dips. It makes sense, you’d pay more for a car that’s clean and properly maintained than one that is rusty and old.One variable that is often overlooked, however, is the heating, ventilation and air conditioning (HVAC) system of a home. A quality HVAC near Tampa, FL allows for proper climate control and makes living comfortable for the entire family. This goes double for homes in Tampa, FL, where the weather is often hot and humid weather. A home with an efficient HVAC can cool the entire house and keep the humidity outside, where it belongs.If you are planning to sell your home for top dollar, here are a few reasons for you to make sure that you have a quality HVAC system.
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