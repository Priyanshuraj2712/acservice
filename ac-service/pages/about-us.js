import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import AboutUs from "@/Components/AboutFirst";
import SatisfactionGuarantee from "@/Components/SatisfactionGuarantee";

const About = () => {
  return (
    <>
      <Head>
        <title>Best AC Mechanic in Gurgaon | AC Repair & Service</title>
        <meta name="description" content="Looking for the best AC mechanic in Gurgaon? We provide expert AC repair and servicing for Window, Split, Cassette, Ductable, VRV/VRF, and Tower ACs. 100% Satisfaction Guarantee!" />
        <meta name="keywords" content="AC repair Gurgaon, AC service Gurgaon, best AC mechanic Gurgaon, window AC repair, split AC service, VRV/VRF AC maintenance, AC installation Gurgaon" />
        <meta name="author" content="AC Service Gurgaon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Best AC Mechanic in Gurgaon | AC Repair & Service" />
        <meta property="og:description" content="We offer top-quality AC repair and servicing in Gurgaon with a 100% Satisfaction Guarantee. Get quick and reliable service from expert technicians!" />
        <meta property="og:url" content="https://acservicegurgaon.com/about" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <AboutUs />
      <SatisfactionGuarantee />
      <Footer />
    </>
  );
};

export default About;
