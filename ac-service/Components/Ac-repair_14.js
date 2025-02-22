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
        <h1>AC repair in gurgaon sector 14, sector 15
        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/ac-repair-in-gurgoan.webp"
                alt="Ac Repair"
              />
            </div>
            <div className={styles.blogPostMeta}>
              <span className={styles.author}>by acservicegurgaon | Apr 22, 2018</span>
              <span className={styles.categories}>
              Cassette Ac, Ducting Ac, Split Ac, Window Ac
              </span>
            </div>
          </div>

          <div className={styles.blogPostContent}>
            <h2> Reliable AC Repair Services in Gurgaon – Sector 14, 15 & Expert Mechanics in Sector 49
            </h2>
            <p>
            Its May (Month) about to start, and Hotness in Gurgaon is very much suitable for cook omelette in sun rays. Summers crucial July to September yet to face. Temperature of gurgaon already giving head to head challenge. In metro city like Gurgaon, more than average population is here of white-collars with 10 to 6 shifts . After all day messing up with laptop generation seeks full night relax sleep under air condition
            </p>
           
            <p><b>One really hot day of summer, the last thing you want is to flip the switch on your split air conditioner and you find that it doesn’t work.</b></p>


            <h2>Split Ac Repair service in Gurgaon Sector 14</h2>
            <p>
            ACs at rest already back to work. But do you know, according to brand’s technician and company guideline, we should avoid use of ac before services if it is running after long time.
            </p>
            
            <p>Precaution is better than cure, As all of us know, to repair air condition in running form is more significant investment when it stops working. We at AC Repair Services Gurgaon provide complete ac repair in gurgaon sector 14 and sector 5 in one hour all gurgaon within 3 hour.</p>
            

            <h2>Split Ac Repair service in Gurgaon Sector 5</h2>
            <p>
            Hot mean May June July, and time get your A/C system working fine. You can call an A/C mechanics in Gurgaon sector 5 to do this. And good thing is that may not may cost you beyond Rs450.
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