import Head from "next/head";
import Navbar from "@/Components/Navbar";
import ContactBanner from "@/Components/ContactBanner";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";

export default function Contact() {
    return (
      <>
        <Head>
          <title>Contact Us | AC Repair & Service in Gurgaon</title>
          <meta name="description" content="Get in touch with us for AC repair, maintenance, and installation services in Gurgaon. Available all 7 days from 8 AM - 10 PM." />
          <meta name="keywords" content="Contact AC repair Gurgaon, AC service contact, Gurgaon AC maintenance, AC installation support" />
          <meta name="author" content="AC Service Gurgaon" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Contact Us | AC Repair & Service in Gurgaon" />
          <meta property="og:description" content="Reach out for expert AC repair, installation, and maintenance services in Gurgaon. Call us today!" />
          <meta property="og:url" content="https://acservicegurgaon.com/contact" />
          <meta property="og:type" content="website" />
        </Head>
        <Navbar />
        <ContactBanner />
        <ContactForm />
        <Footer />
      </>
    );
}
