import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from "@/styles/best-split-ac.module.css";

const BlogPost = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oka0lq2", // Replace with your EmailJS Service ID
        "template_k0cxoym", // Replace with your EmailJS Template ID
        formRef.current,
        "KhhyFGP7FHMWlOGI9" // Replace with your EmailJS Public Key
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
        <h1>Commercial and Residential AC Repair Services
        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/Commercial-AC.jpg"
                alt="Commercial AC Installation"
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
            <h2>Commercial and Residential AC Repair Services in Gurgaon
            </h2>
            <p>
            An air conditioner is an integral part of modern homes. If your air conditioner fails on a humid, muggy day, you only need repair service for the air conditioner and routine maintenance on the air conditioner. We the commercial and residential ac services provider in sector 23 Gurgaon provides swift, trustworthy air conditioning repair service that will help you take the edge off of the summer sun. We fix all of your air conditioner problems and carry the best ac repair and installation, ac service center to help cool your house.
            </p>
            <p>We the commercial and residential ac services provider in sector 23 Gurgaon at in time Service receive extensive training in servicing all types of air conditioners. As an air conditioning maintenance company, we offer local AC repair, air conditioning services, and central air conditioner maintenance to both traditional and contemporary styled homes. We repair air conditioners and service air conditioners in a wide array of sizes, no matter how small or big your system or home is. Furthermore, we offer residential AC repair and service for all kinds of air conditioning units including split units, air/water-cooled package units, ducted units, and window-type air conditioning units.</p>

            

            <h2>Residential AC Repair Services in Sector 23 Gurgaon

            </h2>
            <p>Having an air conditioner at home makes you live happy and cheerful. We provide 24/7 emergency AC repair and installation service to ensure your home gets back to comfortable temperatures in no time. Also, we do cleaning central AC units for all make and models. We have the right staff, the right equipment, and the right technologies to give you quality and professional air conditioning service repair. There can be several explanations behind AC repairs, some of which are technical faults and some are non-technical faults.</p>

            <h2>Commercial AC Repair Services in Sector 23 Gurgaon</h2>
            <p>Having an air conditioner at the workplace increases your efficiency and makes you more productive. But do you know the air conditioners can be risky for health if not maintained or cleansed timely? AC service is a mandatory activity as it removes the dust bacteria from air filters which can be risky for your health. So you must be thinking to book an appointment for AC Service in Sector 22 Gurgaon . Our reasonable administrations incorporate redid plan, AC fix and AC administrations, establishment, customized preventative maintenance contracts, and administration for our customers in various ventures. These include Apartments, extravagance manors, Office spaces, Vehicle showrooms, IT companies, Assembling units, Resorts, Hospitals, etc.</p>



            
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

      <Footer />
    </>
  );
};

export default BlogPost;