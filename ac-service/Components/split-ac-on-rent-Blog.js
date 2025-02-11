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
        <h1>Split AC on rent in Gurgaon

        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.blogPostPage}>
          <div className={styles.blogPostHeader}>
            <div className={styles.imageContainer}>
              <img
                className={styles.blogPostImage}
                src="/rent_split.jpeg"
                alt="rent_split.jpeg"
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
            <h2>Split AC on rent in Gurgaon

            </h2>
            
            <p>If you’re looking for a convenient and cost-effective solution, renting a split AC in Gurgaon might be the perfect choice for you. In this blog, we’ll explore the benefits of opting for split AC rentals in Gurgaon.</p>

            <h2>How to Rent a Split AC with ACServiceGurgaon.com
            </h2>

            <ul className={styles.installationSteps}>
              <li>Visit the Website</li>
              <li>Choose your plan</li>
              <li>Enjoy Hassle-Free Cooling
              </li>
              
            </ul>

            {/* Continue with the rest of your blog content */}
            

            <h2>Why Choose ACServicesGurgaon.com for Split AC Rental
            </h2>
            <p>Wide Range of Top-Tier Split AC ACServiceGurgaon.com offers a diverse range of market-leading split ACs to cater to various room sizes and cooling needs. Whether you’re looking to cool a compact bedroom or a spacious living area, their extensive selection ensures you find the perfect match for your requirements.</p>

            <h2>Flexible Rental Plans
            </h2>
            <p>ACServiceGurgaon.com understands that every customer’s cooling needs are unique. That’s why they offer flexible rental plans, allowing you to choose a duration and package that aligns with your budget and requirements. Say goodbye to one-size-fits-all solutions and hello to personalized comfort.</p>


            <h2>Transparent Pricing and No Hidden Costs
            </h2>
            <p>ACServiceGurgaon.com believes in transparency when it comes to pricing. With no hidden costs, you can rent a split AC with confidence, knowing that you’re getting the best value for your money. Say goodbye to unpleasant surprises in your bill and enjoy straightforward and affordable cooling solutions.

If you are interested in renting a split AC and would like to get in touch with ACServiceGurgaon.com or any other service provider, you can use the following contact information:


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

      <Footer />
    </>
  );
};

export default BlogPost;