import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ACServiceComponent from "@/Components/Ductable";

const About = () => {
  return (
    <>
      <Head>
        <title>Ductable AC Repair & Maintenance Services in Gurgaon</title>
        <meta name="description" content="Get expert Ductable AC repair, maintenance, and duct cleaning services in Gurgaon. Improve air quality, efficiency, and performance with our certified technicians." />
        <meta name="keywords" content="Ductable AC repair Gurgaon, Duct cleaning Gurgaon, AC servicing, HVAC maintenance, Energy-efficient AC solutions" />
        <meta name="author" content="AC Service Gurgaon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ductable AC Repair & Maintenance Services in Gurgaon" />
        <meta property="og:description" content="Professional Ductable AC servicing and repair solutions in Gurgaon. Contact us today for expert duct cleaning and maintenance!" />
        <meta property="og:url" content="https://acservicegurgaon.com/ductable" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <ACServiceComponent />
      <Footer />
    </>
  );
};

export default About;
