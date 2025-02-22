import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ACServiceComponent from "@/Components/Tower";

const About = () => {
  return (
    <>
      <Head>
        <title>Tower AC Repair & Maintenance in Gurgaon | AC Service Gurgaon</title>
        <meta name="description" content="AC Service Gurgaon offers expert Tower AC repair, servicing, and maintenance in Gurgaon. Our certified technicians provide reliable solutions for cooling issues, energy efficiency, and more." />
        <meta name="keywords" content="Tower AC service, Tower AC repair, Tower AC maintenance, AC repair in Gurgaon, AC servicing, air conditioner maintenance, energy-efficient AC solutions" />
        <meta name="author" content="AC Service Gurgaon" />
      </Head>

      <Navbar></Navbar>
      <ACServiceComponent></ACServiceComponent>
      <Footer></Footer>
    </>
  );
};

export default About;
