import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ACServiceComponent from "@/Components/AHU";
import WhatsAppToggle from "@/Components/WhatsApp";

const About = () => {
  return (
    <>
      <Head>
        <title>AHU Air Conditioning System Maintenance Services in Gurgaon</title>
        <meta name="description" content="Expert AHU air conditioning system maintenance services in Gurgaon. We provide routine inspections, filter cleaning, coil servicing, and more for optimal HVAC performance." />
        <meta name="keywords" content="AHU maintenance Gurgaon, air handling unit service, HVAC system maintenance, AHU cleaning, commercial AHU repair, industrial HVAC services" />
        <meta name="author" content="AC Service Gurgaon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AHU Air Conditioning System Maintenance Services in Gurgaon" />
        <meta property="og:description" content="Professional AHU maintenance services for offices, industries, hospitals, and residential complexes. Ensure clean air, energy efficiency, and system longevity." />
        <meta property="og:url" content="https://acservicegurgaon.com/ahu" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <ACServiceComponent />
      <Footer />
      <WhatsAppToggle/>
    </>
  );
};

export default About;
