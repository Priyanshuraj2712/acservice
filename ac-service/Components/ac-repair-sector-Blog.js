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
        <h1>AC Repair & Service in Sector 22
        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/AC-Gas.jpg"
                alt="AC Repair"
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
            <h2>AC Repair & Service in Sector 22 Gurgaon

            </h2>
            <p>
            As the leading AC Repair and Services in Gurgaon Sector 22, ACServicesGurgaon has established itself. AC Repair, AC Repair, AC Installation, AC Servicing, AC Gas Refilling, AC Advanced Piping Facilities, All Air Conditioner Service Types we offer in Gurgaon Sector 22.
            </p>
            <p>For all our facilities, we charge a very fair price, and we also perform long-term service maintenance contracts to increase the effectiveness of your cooling systems. There are various occasions where our clients have recommended us to their friends and relatives. The standards for our performance are high customer loyalty, and we appreciate our customers’ gratitude more than our profits and other benefits.</p>
            <p>Our AC Technicians Have Decades Of Practical, In Field Experience. That’s In Addition To Factory Training. We Have The Knowledge And Skills Needed To Diagnose And Repair AC Problems You May Have.</p>


            

            <h2>WAC Technician Services in Gurgaon Sector 22
            </h2>
            <p>If You Are Looking For the best AC Technician In Sector 22 For Your Split AC Repair & AC Installation Services.

</p>

            <h2>AC Installation Services in Sector 22 Gurugram
            </h2>
            <p>We Are One The Best Name In Field For AC Installation In Gurgaon. We Provide Quality Air Conditioning Installation Services In Gurgaon.</p>
            <p>At ACServicesGurgaon, our complete focus is on giving you a great customer experience and intended to deliver exceptional AC Repair and Services to your home and business through our professionals. Our mission is to provide quality AC Repair and Service and quality AC Installation Services and AC Uninstallation Services by providing the maximum level of honesty, reliability, and craftsmanship with an objective of constantly exceeding the expectations of our customers. With our online form, phone, and same-day service facilities, we make your comfort our top priority. We are committed to excellent quality AC repairs and services with speed, professionalism, and comprehensive installation of air conditioning and AC uninstallation services. communication with our clients.</p>

            <h2>Commercial AC Repair in Sector 22 Gurgaon
            </h2>
            <p>The commercial ACs are used in the office places where people work, there are many areas in Gurgaon. Commercial ACs is almost compulsory in summer weather for all the people in Gurgaon Sector 22. The commercial areas of sector 22 consist of small and big offices and coupes which are spread all over the city. The offices of any commercial area consist of small size offices and large apartments type offices, these businesses vary from one cabin to luxury offices. If your AC is not working properly, you can ACServicesGurgaon in Sector 22.</p>
            <p>AC repair and service companies are companies or service suppliers dedicated to repairing and maintaining air-conditioning systems. India has warm and tropical weather conditions and hence offers relief from the oppressive heat and humidity by providing air conditioning indoors. An AC repair firm caters to residences, commercial spaces as well as industrial centers.</p>



            
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