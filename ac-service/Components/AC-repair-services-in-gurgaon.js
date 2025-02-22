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
        <h1>Best AC Service in Sector 12 Gurgaon
        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/AC-repair-services-in-gurgaon-sector-12.jpg"
                alt="Ac Repair"
              />
            </div>
            <div className={styles.blogPostMeta}>
              <span className={styles.author}>by acservicegurgaon | Apr 19, 2020</span>
              <span className={styles.categories}>
                 Uncategorized
              </span>
            </div>
          </div>

          <div className={styles.blogPostContent}>
            <h2> AC repair sercices in Gurgaon Sector 12 near Bus Stand

            </h2>
            <p>
            Trust in us because we:
            </p>
            <ul className={styles.installationSteps}>
                <li>Native AC mechanic in Sector 12
                </li>
                <li>Same day repair and maintenance
                </li>
                <li>We provide a guarantee or warranty for our services
                </li>
                <li>We install & service major air conditioning brands
                </li>
                <li>Professional work by trained mechanics.
                </li>
            </ul>

            <h2>
  Look no further.{" "}
  <a href="tel:+91810954362" style={{ color: "orange", fontWeight: "bold", textDecoration: "none" }}>
    Call us
  </a>{" "}
  now!!
</h2>
            

            <p>
            Is Your Air Conditioner not turning on? Cooling system making odd noises after beginning? Cooling is low even in 18 degrees? Don’t sweat it. We are ready to help when you need air condition need repairs in Gurgaon. 
            </p>
            

            <h2>Schedule AC repair service in sector 12 Gurgaon Today
            </h2>
            <p>
            We provide repair, installation and maintenance services for all ac types like window AC, split AC, all types commercial AC, all makes and models including Samsung, Carrier, and LG, Whirlpool, Daikin, etc. If your AC needs repair, then contact the top ac mechanic in near bus stand sector 12 today! We are often able to schedule same-day services as we local in the sector in 12.            </p>

            <h2>Ductless AIR Conditioner Professional Services in Gurgaon
            </h2>
            <p>
            Whether you live in Gurgaon sector 14 or in any area near Bus Stand, AC Services Gurgaon can help make your home more comfortable during the hot summer months. Our professional ductless air conditioning and central air conditioner repair, maintenance, and installation services. We provide the most trusted, affordable and professional ductless air conditioning services in Gurgaon sector 14
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