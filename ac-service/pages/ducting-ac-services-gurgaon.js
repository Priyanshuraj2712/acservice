import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ACServiceComponent from "@/Components/Ductable";
import WhatsAppToggle from "@/Components/WhatsApp";

const DuctableACServices = () => {
  return (
    <>
      <Head>
        <title>Ductable AC Repair & Maintenance Services in Gurgaon | Expert Technicians</title>
        <meta 
          name="description" 
          content="Get professional Ductable AC repair, servicing, and installation in Gurgaon. Improve air quality with expert duct cleaning and maintenance. Book today!" 
        />
        <meta 
          name="keywords" 
          content="Ductable AC service Gurgaon, Ductable AC repair, duct cleaning, AC maintenance, energy-efficient AC, HVAC repair" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AC Services Gurgaon" />
        <link rel="canonical" href="https://acservicegurgaon.com/ducting-ac-services-gurgaon" />
      </Head>

      <Navbar />
      <ACServiceComponent />
      <Footer />
      <WhatsAppToggle />
    </>
  );
};

export default DuctableACServices;
