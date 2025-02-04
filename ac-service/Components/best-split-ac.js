import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from "@/styles/best-split-ac.module.css";

const BlogPost = () => {
  return (
    <>
      <Navbar />
      <div className={styles.banner}>
        <h1>Best Split AC Installation: Gurgaon Residents</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <img
              className={styles.blogPostImage}
              src="/Best_Ac.png"
              alt="Split AC Installation"
            />
            <div className={styles.blogPostMeta}>
              <span className={styles.author}>by acservicegurgaon | May 2, 2024</span>
              <span className={styles.categories}>
                Cassette Ac, Ducting Ac, Split Ac, Uncategorized, Window Ac
              </span>
            </div>
          </div>

          <div className={styles.blogPostContent}>
            <h2>Best Split AC Installation: Gurgaon Residents</h2>
            <p>
              A Split Air Conditioner system has become a necessity rather than a
              luxury. However, installing a split AC system correctly is crucial for
              its optimal performance and longevity. In this guide, we’ll delve into
              the essential steps and considerations for split AC installation in
              Gurgaon, ensuring you enjoy cool and refreshing air throughout the hot
              season.
            </p>

            {/* Continue with the rest of your blog content */}
            <p>Choosing the Right Location</p>
            <p>Preparing the Space</p>
            <p>Mounting the Indoor Unit</p>
            <p>Installing the Outdoor Unit</p>
            <p>Refrigerant Charging and Testing</p>
            <p>Final Checks and Adjustments</p>

            <div className={styles.callToAction}>
              Contact us for expert Split AC installation in Gurgaon today!
            </div>
          </div>

          <div className={styles.commentSection}>
            <h3>Leave a Comment</h3>
            <form className={styles.commentForm}>
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
              <label>Email</label>
              <input type="email" name="email" placeholder="Your Email" required />
              <label>Comment</label>
              <textarea name="comment" placeholder="Your Comment" required></textarea>
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
