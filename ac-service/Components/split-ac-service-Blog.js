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
        <h1>Split AC service repair in Gurgaon
        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/Split-AC.jpg"
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
            <h2>Is Your Split AC Functioning?
            </h2>
            <p>
            It is a pleasing time when we enter the home and wife offers a glass of water, they talk with smile & help in erasing the tiredness of our body. At the moment we thank god for giving such caring family members in the life, isn’t it? It is an example of a good life & lifestyle, where we get everything in the easiest way.<br/>
            But there is one non-living thing that makes our life happy in the home & in the office, that is AC or we can say “Split AC” less maintenance, good service, and easily accessible. Nowadays, without an AC, it is stiff to imagine the lifestyle of Gurgaon and Delhi/NCR.
            </p>

            <p><b>If you’re looking for Gurgaon split air conditioning and repairing services, you can trust us to get the job done right at a fair price! Contact us now</b></p>

            

            


            
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