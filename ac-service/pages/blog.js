import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Blogcontent from "@/Components/Blogmain";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Blog() {
    return (
      <>
        <Head>
          <title>AC Repair & Installation Blog | Gurgaon AC Services</title>
          <meta name="description" content="Stay updated with the latest AC repair, installation, and rental services in Gurgaon. Get expert insights on Split AC, Window AC, Cassette AC, and more." />
          <meta name="keywords" content="AC blog Gurgaon, AC repair tips, Split AC installation, Window AC rental, Gurgaon AC services, HVAC maintenance" />
          <meta name="author" content="AC Service Gurgaon" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="AC Repair & Installation Blog | Gurgaon AC Services" />
          <meta property="og:description" content="Explore expert tips and insights on AC repair, installation, and rental services in Gurgaon. Find the best solutions for your air conditioning needs." />
          <meta property="og:url" content="https://acservicegurgaon.com/blog" />
          <meta property="og:type" content="website" />
        </Head>
        <Navbar />
        <Blogcontent />
        <Footer />
        <WhatsAppToggle/>
      </>
    );
}
