import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import AboutUs from "@/Components/AboutFirst";
import SatisfactionGuarantee from "@/Components/SatisfactionGuarantee";
import WhatsAppToggle from "@/Components/WhatsApp";

const About = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Best AC Service in Gurgaon | AC Repair & Installation</title>
        <meta name="description" content="Get fast, affordable, and professional AC repair & installation services in Gurgaon. We offer Window AC, Split AC, and more. 100% satisfaction guaranteed!" />
        <meta name="keywords" content="AC service Gurgaon, AC repair Gurgaon, best AC installation, AC maintenance, Gurgaon AC experts, Window AC repair, Split AC service, AC pipe fitting, home appliance repair" />
        <meta name="author" content="AC Service Gurgaon" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Best AC Service in Gurgaon | AC Repair & Installation" />
        <meta property="og:description" content="Reliable AC repair & installation services in Gurgaon. 100% satisfaction guaranteed. Contact us today!" />
        <meta property="og:url" content="https://acservicegurgaon.com/about-us/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://acservicegurgaon.com/assets/og-image.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best AC Service in Gurgaon | AC Repair & Installation" />
        <meta name="twitter:description" content="Expert AC repair & installation services in Gurgaon. Contact us for fast and professional service!" />
        <meta name="twitter:image" content="https://acservicegurgaon.com/assets/twitter-image.jpg" />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://acservicegurgaon.com/about-us/" />

        {/* Schema Markup for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AC Service Gurgaon",
            "url": "https://acservicegurgaon.com",
            "image": "https://acservicegurgaon.com/assets/logo.png",
            "description": "We provide professional AC repair, installation, and maintenance services in Gurgaon for Window AC, Split AC, and more.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Gurgaon",
              "addressRegion": "HR",
              "postalCode": "122001",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919810954362",
              "contactType": "customer service"
            },
            "openingHours": "Mo-Su 08:00-22:00",
            "sameAs": [
              "https://www.facebook.com/acservicegurgaon",
              "https://twitter.com/acservicegurgaon"
            ]
          })}
        </script>
      </Head>

      <Navbar />
      <AboutUs />
      <SatisfactionGuarantee />
      <Footer />
      <WhatsAppToggle />
    </>
  );
};

export default About;
