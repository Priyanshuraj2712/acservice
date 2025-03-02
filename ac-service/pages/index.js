import Head from "next/head";
import Navbar from "@/Components/Navbar";
import ServiceContainer from "@/Components/ServiceContainer";
import ACCards from "@/Components/ACCard";
import HowWeWork from "@/Components/HowWeWork";
import BrandSection from "@/Components/BrandSection";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Home() {
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Best AC Service in Gurgaon | AC Repair & Installation</title>
        <meta name="description" content="Get expert AC service in Gurgaon, including AC repair, installation, and maintenance. Fast & affordable air conditioning solutions. Call us now!" />
        <meta name="keywords" content="AC service Gurgaon, AC repair Gurgaon, AC installation Gurgaon, air conditioner service, AC maintenance, best AC technician" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AC Service Gurgaon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Best AC Service in Gurgaon | AC Repair & Installation" />
        <meta property="og:description" content="Get expert AC service in Gurgaon, including AC repair, installation, and maintenance. Fast & affordable air conditioning solutions." />
        <meta property="og:image" content="https://acservicegurgaon.com/path-to-uploaded-image.jpg" />
        <meta property="og:url" content="https://acservicegurgaon.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best AC Service in Gurgaon | AC Repair & Installation" />
        <meta name="twitter:description" content="Fast & reliable AC repair, installation, and service in Gurgaon. Book now!" />
        <meta name="twitter:image" content="https://acservicegurgaon.com/service.webp" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://acservicegurgaon.com/" />
      </Head>

      <Navbar />
      <ServiceContainer />
      <ACCards />
      <HowWeWork />
      <BrandSection />
      <Footer />
      <WhatsAppToggle />
    </>
  );
}
