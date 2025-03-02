import Head from "next/head";
import Navbar from "@/Components/Navbar";
import ContactBanner from "@/Components/ContactBanner";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Contact() {
    return (
      <>
        <Head>
          {/* SEO Meta Tags */}
          <title>Contact Us - AC Repair & Service in Gurgaon | AC Service Gurgaon</title>
          <meta 
            name="description" 
            content="Contact AC Service Gurgaon for fast & reliable AC repair, installation, and service. Call +91-9810954362 or visit us at Lajpat Nagar, Gurgaon." 
          />
          <meta 
            name="keywords" 
            content="contact AC service Gurgaon, AC repair contact, Gurgaon AC repair phone number, AC installation Gurgaon, air conditioner service Gurgaon" 
          />
          <meta name="author" content="AC Service Gurgaon" />

          {/* Open Graph (OG) Tags for Social Media (No Image) */}
          <meta property="og:title" content="Contact Us - AC Repair & Service in Gurgaon | AC Service Gurgaon" />
          <meta property="og:description" content="Contact AC Service Gurgaon for fast & reliable AC repair, installation, and service. Call +91-9810954362 or visit us at Lajpat Nagar, Gurgaon." />
          <meta property="og:url" content="https://acservicegurgaon.com/contact-us/" />
          <meta property="og:type" content="website" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Contact Us - AC Repair & Service in Gurgaon | AC Service Gurgaon" />
          <meta name="twitter:description" content="Contact AC Service Gurgaon for fast & reliable AC repair, installation, and service. Call +91-9810954362 or visit us at Lajpat Nagar, Gurgaon." />

          {/* Schema Markup for Google SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Us - AC Repair & Service in Gurgaon",
              "url": "https://acservicegurgaon.com/contact-us/",
              "description": "Contact AC Service Gurgaon for fast & reliable AC repair, installation, and service.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "195/1 Lajpat Nagar",
                "addressLocality": "Gurgaon",
                "addressCountry": "IN"
              },
              "telephone": "+919810954362",
              "openingHours": "Mo-Su 08:00-22:00"
            })}
          </script>
        </Head>

        <Navbar />
        <ContactBanner />
        <ContactForm />
        <Footer />
        <WhatsAppToggle/>
      </>
    );
}
