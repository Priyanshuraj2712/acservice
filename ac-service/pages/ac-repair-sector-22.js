import Head from "next/head";
import Navbar from "@/Components/Navbar";
import BlogPostPage from "@/Components/ac-repair-sector-Blog";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Contact() {
  return (
    <>
     <Head>
        {/* Essential Meta Tags */}
        <title>AC Repair & Service in Sector 22, Gurgaon | AC Installation & Maintenance</title>
        <meta 
          name="description" 
          content="Get expert AC repair & service in Sector 22, Gurgaon. We provide AC installation, servicing, gas refilling, and maintenance for all types of ACs." 
        />
        <meta 
          name="keywords" 
          content="AC repair Sector 22, AC service Gurgaon, Split AC repair, Window AC service, Commercial AC maintenance, AC installation Sector 22" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AC Service Gurgaon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="AC Repair & Service in Sector 22, Gurgaon | AC Installation & Maintenance" />
        <meta property="og:description" content="Professional AC repair services in Gurgaon Sector 22. We specialize in split AC, window AC, cassette AC, and ducting AC maintenance." />
        <meta property="og:image" content="https://acservicegurgaon.com/images/AC-Gas.jpg" />
        <meta property="og:url" content="https://acservicegurgaon.com/ac-repair-sector-22" />
        <meta property="og:type" content="article" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AC Repair & Service in Sector 22, Gurgaon | AC Installation & Maintenance" />
        <meta name="twitter:description" content="Need AC service in Sector 22, Gurgaon? We offer AC installation, repair, and servicing with expert technicians. Call now for same-day service!" />
        <meta name="twitter:image" content="https://acservicegurgaon.com/images/AC-Gas.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://acservicegurgaon.com/ac-repair-sector-22" />
      </Head>

      <Navbar></Navbar>
      <BlogPostPage></BlogPostPage>
      <Footer></Footer>
      <WhatsAppToggle/>
    </>
  );
}
