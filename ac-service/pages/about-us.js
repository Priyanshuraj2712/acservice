import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import AboutUs from "@/Components/AboutFirst";
import SatisfactionGuarantee from "@/Components/SatisfactionGuarantee";
import WhatsAppToggle from "@/Components/WhatsApp";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>About Us - AC Repair & Service in Gurgaon | 24x7 Support</title>
        <meta 
          name="description" 
          content="Learn more about AC Service Gurgaon. We provide fast, reliable, and professional AC repair services in Gurgaon. 100% satisfaction guaranteed!" 
        />
        <meta 
          name="keywords" 
          content="AC repair Gurgaon, AC service Gurgaon, AC installation, best AC technician, professional AC repair" 
        />
        <meta name="author" content="AC Service Gurgaon" />

        {/* Open Graph (OG) Tags for Social Media */}
        <meta property="og:title" content="About Us - AC Repair & Service in Gurgaon | 24x7 Support" />
        <meta property="og:description" content="Learn more about AC Service Gurgaon. We provide fast, reliable, and professional AC repair services in Gurgaon. 100% satisfaction guaranteed!" />
        <meta property="og:image" content="https://acservicegurgaon.com/satisfaction.jpg" />
        <meta property="og:url" content="https://acservicegurgaon.com/about-us/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - AC Repair & Service in Gurgaon | 24x7 Support" />
        <meta name="twitter:description" content="Learn more about AC Service Gurgaon. We provide fast, reliable, and professional AC repair services in Gurgaon. 100% satisfaction guaranteed!" />
        <meta name="twitter:image" content="https://acservicegurgaon.com/satisfaction.jpg" />

        {/* Schema Markup for Google SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AC Service Gurgaon",
            "url": "https://acservicegurgaon.com/about-us/",
            "image": "https://acservicegurgaon.com/satisfaction.jpg",
            "description": "Learn more about AC Service Gurgaon. We provide fast, reliable, and professional AC repair services in Gurgaon. 100% satisfaction guaranteed!",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gurgaon",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 9810954362",
              "contactType": "customer service"
            }
          })}
        </script>
      </Head>

      <Navbar />
      
      {/* About Us Section */}
      <AboutUs />

      {/* Satisfaction Guarantee Section */}
      <SatisfactionGuarantee />

      {/* Fix: Contact Us Link */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <p>Need AC Service? <Link href="/contact-us"><a style={{ color: "#007bff", textDecoration: "underline" }}>Contact Us</a></Link> today!</p>
      </div>

      <Footer />
      <WhatsAppToggle />
    </>
  );
};

export default About;
