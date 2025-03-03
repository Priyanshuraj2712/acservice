import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ACServiceComponent from "@/Components/Tower";
import WhatsAppToggle from "@/Components/WhatsApp";

const TowerACServices = () => {
  return (
    <>
      <Head>
        <title>Tower AC Repair & Maintenance Services in Gurgaon | Expert Cooling Solutions</title>
        <meta 
          name="description" 
          content="Get professional Tower AC repair, servicing, and maintenance in Gurgaon. Expert technicians ensuring efficient cooling and long-lasting performance." 
        />
        <meta 
          name="keywords" 
          content="Tower AC service Gurgaon, Tower AC repair, Tower AC installation, HVAC maintenance, Tower AC troubleshooting, AC gas refilling" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AC Services Gurgaon" />
        <link rel="canonical" href="https://acservicegurgaon.com/tower-ac-services-gurgaon" />
      </Head>

      <Navbar />
      <ACServiceComponent />
      <Footer />
      <WhatsAppToggle />
    </>
  );
};

export default TowerACServices;
