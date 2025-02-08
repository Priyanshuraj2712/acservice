import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from "@/styles/best-split-ac.module.css";

const BlogPost = () => {
  return (
    <>
      <Navbar />
      <div className={styles.banner}>
        <h1>Window AC On Rent in Gurgaon
        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/rent_window.jpeg"
                alt="Window AC Installation"
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
            <h2>Window AC On Rent in Gurgaon
            </h2>
            <p>
            Welcome to ACServiceGurgaon.com, your one-stop destination for hassle-free Window air conditioner on rent in Gurgaon,
When the summer heat becomes unbearable, and you’re in need of a cooling escape,
our air conditioner rental services have got you covered.
            </p>

            {/* Continue with the rest of your blog content */}
            <p>Reliability and Reputation
            </p>
            <p>Budget-Friendly Options
            </p>
            <p>User-Friendly Experience
            </p>
            <p>Cost-Effective Cooling
            </p>
            <p>Affordable Rental Packages
            </p>
            <p>Easy Online Booking Process
            </p>

            <h2>Why Choose ACServicesGurgaon.com for Window AC Rental
            </h2>
            <p>At ACServicesGurgaon.com, reliability is our hallmark. Our well-maintained window ACs ensure efficient cooling, backed by a reputation for providing top-notch cooling solutions in Gurgaon.</p>

            <h2>Cost-Effective Cooling</h2>
            <p>Compared to split ACs, window ac units are more budget-friendly both in upfront costs and energy consumption. Renting from ACServicesGurgaon.com lets you enjoy cool air without burning a hole in your pocket.

Renting an Window air conditioner in Gurgaon has never been this easy! With ACServicesGurgaon.com,
you can enjoy a cool and comfortable space without the stress of ownership.
Take advantage of our user-friendly website and competitive rental packages.
Stay cool, save money, and beat the heat with ACServicesGurgaon.com – your trusted partner in Window air conditioner on rentals contact us.</p>



            
          </div>

          <div className={styles.commentSection}>
            <h3>Leave a Comment</h3>
            <form className={styles.commentForm}>
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