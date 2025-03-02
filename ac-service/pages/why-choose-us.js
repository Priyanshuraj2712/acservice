import Head from "next/head";
import Navbar from "@/Components/Navbar";
import ChoosePage from "@/Components/ChooseUsContent";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function WhyChooseUs() {
  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Why Choose Us - Best AC Repair & Service in Gurgaon | Trusted Experts</title>
        <meta 
          name="description" 
          content="Looking for reliable AC repair & installation in Gurgaon? We offer expert services with no hidden fees, certified technicians, and a satisfaction guarantee." 
        />
        <meta 
          name="keywords" 
          content="AC repair Gurgaon, AC service Gurgaon, AC maintenance, air conditioner installation, best AC repair service" 
        />
        <meta name="author" content="AC Service Gurgaon" />

        {/* Open Graph (OG) Tags for Social Media */}
        <meta property="og:title" content="Why Choose Us - Best AC Repair & Service in Gurgaon | Trusted Experts" />
        <meta property="og:description" content="Looking for reliable AC repair & installation in Gurgaon? We offer expert services with no hidden fees, certified technicians, and a satisfaction guarantee." />
        <meta property="og:url" content="https://acservicegurgaon.com/why-choose-us/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Why Choose Us - Best AC Repair & Service in Gurgaon | Trusted Experts" />
        <meta name="twitter:description" content="Looking for reliable AC repair & installation in Gurgaon? We offer expert services with no hidden fees, certified technicians, and a satisfaction guarantee." />

        {/* Schema Markup for Google SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AC Service Gurgaon",
            "url": "https://acservicegurgaon.com/why-choose-us/",
            "description": "Looking for reliable AC repair & installation in Gurgaon? We offer expert services with no hidden fees, certified technicians, and a satisfaction guarantee.",
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
      <ChoosePage />
      <Footer />
      <WhatsAppToggle />
    </>
  );
}
