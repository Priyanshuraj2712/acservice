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
        <h1>AC Repair & Services in Gurgaon DLF Phase 2


        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/ac-repair-and-service.webp"
                alt="Ac Repair"
              />
            </div>
            <div className={styles.blogPostMeta}>
              <span className={styles.author}>by acservicegurgaon | Feb 20, 2021</span>
              <span className={styles.categories}>
                 Uncategorized
              </span>
            </div>
          </div>

          <div className={styles.blogPostContent}>
            <h2>AC Repair & Services in DLF Phase 2

            </h2>
            <p>
            Gurgaon has a rich history of pioneering families who have built up a warm community and demand reliable AC repair services and deserve them. As one of the most densely populated cities in India, AC repair in Gurgaon is among the top AC services demanded. In the hot summer months, Air Pros is proud to offer AC Repair, along with other customized solutions such as AC installation in DLF Phase 2, AC Repair in DLF Phase 2, and AC Gas Filling in Gurgaon DLF Phase 2 for Gurgaon homeowners.
            </p>

            <h2>
  Look no further.{" "}
  <a href="tel:+91810954362" style={{ color: "orange", fontWeight: "bold", textDecoration: "none" }}>
    Call us
  </a>{" "}
  now!!
</h2>
            

            <p>When things work well, it is easy to neglect them, but systems for heating, ventilation, and air conditioning (HVAC) play a vital role in the proper functioning of both residential and commercial real estate properties. These devices do everything to help these structures’ inhabitants stay relaxed and safe. At the same time, air conditioning systems that are fully operating do even more.</p>
            <p>Don’t wait till a major problem develops before having your AC system checked. Make the most of the top services we offer here at Air Pros. Contact us today when you need AC repair in Gurgaon DLF Phase 2. Feel free to call us or fill out the online form found on this site to schedule an appointment with our team.</p>

            <h2>New AC installation in DLF Phase 2

            </h2>
            <p>Whether you’re replacing the unit you have or upgrading your home with a new AC, we can help.</p>

            <h2>Window AC Repair & Services DLF Phase 2 Gurgaon
            </h2>
            <p>If you need to get your window air conditioner repaired in DLF Phase 2 we can help. Our repair & service are best in Gurgaon and we can take care of all your needs. No matter whether you air conditioning service or repair we all have it in us, we can repair it. We have years of experience working with all the best central air conditioner brands such as LG, Carrier. Voltas, Samsung. As a result, you can rest assured we’re familiar with your air conditioning system and we have the parts you need to complete a successful air conditioner repair.
            </p>
            <ul className={styles.installationSteps}>
              <li> Professional Service</li>
              <li> Fast Response Time
              </li>
              <li> Window AC Troubleshooting
              </li>
              <li> Window Air Conditioner Repair
              </li>
              <li> Window AC Parts Replacement
              </li>
              <li> For All Types and Sizes of Window AC Units
              </li>
              
            </ul>

            <h2>Split AC Repair & Services DLF Phase 2 Gurgaon
            </h2>
            <p>Whether you’re looking for split ac repair & services DLF phase 2 Gurgaon or air conditioning maintenance, air conditioner repair, or a new air conditioning system, We can help. We’re your best, most-trusted option for fast, quick, and easy local service, repair, and maintenance of your home air conditioning system. If your split AC isn’t cooling or your central air conditioner is leaking water, we’ll connect you to the best local AC repair services in DLF Phase 2 Gurgaon technicians in the business. We have local technicians in your neighborhood that are highly trained, licensed, vetted, and guaranteed to help fix all of your air conditioning needs.</p>
            


            

            


            
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