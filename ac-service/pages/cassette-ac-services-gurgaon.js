import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ACServiceComponent from "@/Components/Cassette";
import WhatsAppToggle from "@/Components/WhatsApp";

const CassetteACServices = () => {
  return (
    <>
      <Head>
        <title>Cassette AC Maintenance & Repair Services in Gurgaon</title>
        <meta 
          name="description" 
          content="Expert Cassette AC maintenance and repair services in Gurgaon. Fast and reliable solutions by certified technicians with affordable pricing. Book now!" 
        />
        <meta 
          name="keywords" 
          content="Cassette AC repair Gurgaon, Cassette AC maintenance, commercial AC services, HVAC repair, Cassette AC installation" 
        />
        <meta name="author" content="AC Service Gurgaon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Cassette AC Maintenance & Repair Services in Gurgaon" />
        <meta 
          property="og:description" 
          content="Top-quality Cassette AC repair and maintenance services in Gurgaon. Get expert solutions, genuine parts, and hassle-free service today!" 
        />
        <meta property="og:url" content="https://acservicegurgaon.com/cassette-ac-maintenance" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <ACServiceComponent />
      <Footer />
      <WhatsAppToggle />
    </>
  );
};

export default CassetteACServices;
