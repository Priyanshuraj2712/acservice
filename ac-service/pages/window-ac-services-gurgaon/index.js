import React from "react";
import Link from "next/link";
import styles from "@/styles/Window.module.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const windowACSubcategories = [
  { name: "Window AC Service", image: "service.png", link: "/window-ac-services-gurgaon/service" },
  { name: "Window AC Installation/Uninstallation", image: "install.jpg", link: "/window-ac-services-gurgaon/install" },
  { name: "Window AC Gas Refilling", image: "gas.webp", link: "/window-ac-services-gurgaon/gas" },
  { name: "Window AC Other Work", image: "other.webp", link: "/window-ac-services-gurgaon/other" },
];

const WindowACPage = () => {
  return (
    <div>
      <Navbar />
      
      <div className={styles.header}>
        <h2>Window AC Services</h2>
        <p>
          Repair, Service & Maintenance of all brands Window AC in Gurgaon, LG AC, Samsung AC, Daikin AC, Carrier AC, 
          Blue Star AC, Voltas AC, Videocon & Onida ACs. Gurgaon Repairs offers all brand air conditioners repairing.
          Delhi Gurgaon is known for hot and humid weather in north. Population and pollution can be the reason, but workload 
          and daily life travel make it feel warmer than actual. In such a busy life, every Gurgaon and Delhi resident wants rest 
          and comfortable nights. A malfunctioning air conditioner can spoil your entire night. This is one problem no one wants to experience.
        </p>
        <p>
          When your air conditioner is not working like it should, the temperature in your home or business could go from room 
          temperature to sweltering very quickly. For more than ten years, we have delivered top-quality AC service, maintenance, 
          and installation, including gas fillings, to our residential and commercial customers in Gurgaon. When you are in need 
          of a window AC mechanic, we are available with just a single call. You can count on us to make sure that your air 
          conditioning system is functioning at a fully operational state.
          Our experienced air conditioning mechanics/experts have the deep knowledge and tools to find and fix any issues that 
          your air conditioning system may be experiencing. Here at Complete Window AC Service, we can repair and service any 
          make or model. We use state-of-the-art tools and technology to identify and repair even the smallest of problems.
        </p>
        <p>
          From the smallest window unit to the most technologically advanced AC system, our technicians can handle it all. When 
          you are in need of fast and reliable AC service in Gurgaon, you can trust us!
          In addition to providing Window AC service or AC service in Gurugram, we also offer window AC installation. When we receive 
          service calls from our customers, we try our best to repair their air conditioning systems and return them to perfect working 
          condition. However, there are some instances where the AC system is beyond repair and needs to be replaced. If your air 
          conditioning system does need to be replaced, you can trust our AC experts to help you choose the best new window AC system 
          for your individual needs.
        </p>
       
      </div>

      <div className={styles.cardContainer}>
        {windowACSubcategories.map((sub, index) => (
          <Link key={index} href={sub.link} passHref>
            <button className={styles.card}>
              <img src={sub.image} alt={`${sub.name} Illustration`} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{sub.name}</h3>
              </div>
            </button>
          </Link>
        ))}
      </div>

      <div className={styles.additionalInfo}>
        <h3>Why Choose Us?</h3>
        <p>
          If your air conditioning system is experiencing any of these signs, contact us right away. We can examine your AC unit 
          and fix any signs of trouble so that you can avoid a costly replacement installation down the road. We offer both residential 
          AC service and commercial AC service in Gurgaon. Call us today at +91-9810954362 or contact us to take advantage of our fast 
          and reliable Window AC service in Gurugram.
        </p>
        <p>
          If your air conditioning system is experiencing any issues, contact us right away. We can examine your AC unit 
          and fix any signs of trouble so that you can avoid costly replacements. We offer both residential and commercial 
          AC services in Gurgaon. Call us today at +91-9810954362 or contact us to take advantage of our fast and reliable service.
        </p>
       
      </div>

      <Footer />
    </div>
  );
};

export default WindowACPage;