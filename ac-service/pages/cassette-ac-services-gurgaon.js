import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ACServiceComponent from "@/Components/Cassette";
import WhatsAppToggle from "@/Components/WhatsApp";

const CassetteACServices = () => {
  return (
    <>
      <Head>
        <title>Cassette AC Repair & Maintenance Services in Gurgaon | Expert Technicians</title>
        <meta 
          name="description" 
          content="Professional Cassette AC repair, installation, and maintenance services in Gurgaon. Reliable service, expert technicians, and affordable pricing. Book now!" 
        />
        <meta 
          name="keywords" 
          content="Cassette AC service Gurgaon, Cassette AC repair, Cassette AC installation, AC maintenance, commercial AC repair" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AC Services Gurgaon" />
        <link rel="canonical" href="https://acservicegurgaon.com/cassette-ac-services-gurgaon" />
      </Head>

      <Navbar />
      <ACServiceComponent />
      <Footer />
      <WhatsAppToggle />
    </>
  );
};

export default CassetteACServices;
