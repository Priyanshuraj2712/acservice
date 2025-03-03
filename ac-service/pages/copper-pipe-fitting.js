import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ACServiceComponent from "@/Components/FittingComponent";
import WhatsAppToggle from "@/Components/WhatsApp";

const CopperPipeFitting = () => {
  return (
    <>
      <Head>
        <title>Copper Pipe Fitting Services in Gurgaon | Expert Installation & Repair</title>
        <meta 
          name="description" 
          content="Professional copper pipe fitting services in Gurgaon. Expert installation, repair, and maintenance for residential, commercial, and industrial pipelines." 
        />
        <meta 
          name="keywords" 
          content="Copper pipe fitting Gurgaon, AC copper pipe installation, pipeline fitting services, industrial pipeline assembly, copper pipeline repair" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AC Services Gurgaon" />
        <link rel="canonical" href="https://acservicegurgaon.com/copper-pipe-fitting" />
      </Head>

      <Navbar />
      <ACServiceComponent />
      <Footer />
      <WhatsAppToggle />
    </>
  );
};

export default CopperPipeFitting;
