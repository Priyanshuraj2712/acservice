import Head from "next/head";
import Navbar from "@/Components/Navbar";
import VRV_VRF_Services from "@/Components/VRV";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

const VRVACServices = () => {
  return (
    <>
      <Head>
        <title>VRV & VRF AC Repair & Maintenance Services in Gurgaon | Expert HVAC Solutions</title>
        <meta 
          name="description" 
          content="Professional VRV & VRF AC installation, repair, gas refilling, and maintenance services in Gurgaon. Certified technicians ensuring efficiency and reliability." 
        />
        <meta 
          name="keywords" 
          content="VRV AC service Gurgaon, VRF AC repair, VRV installation, HVAC maintenance, VRV gas refilling, VRF troubleshooting" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AC Services Gurgaon" />
        <link rel="canonical" href="https://acservicegurgaon.com/vrv-ac-services-gurgaon" />
      </Head>

      <Navbar />
      <VRV_VRF_Services />
      <Footer />
      <WhatsAppToggle />
    </>
  );
};

export default VRVACServices;
