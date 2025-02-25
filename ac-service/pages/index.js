import Head from "next/head";
import Navbar from "@/Components/Navbar";
import ServiceContainer from "@/Components/ServiceContainer";
import ACCards from  "@/Components/ACCard";
import HowWeWork from "@/Components/HowWeWork";
import BrandSection from "@/Components/BrandSection";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Home() {
  return (
    <>
      <Head>
        <title>AC Service Gurgaon | Your AC Doctor</title>
        <meta name="description" content="At AC Service Gurgaon, we offer top-notch maintenance, installation, and repair for all types of air conditioners. We specialize in Window AC, Split AC, Ductable AC, VRV/VRF AC, Tower AC, and more. Let us take care of your AC problems with expert solutions." />
        <meta name="keywords" content="AC service, AC maintenance, AC repair, Window AC, Split AC, Ductable AC, VRV AC, Tower AC, Gurgaon, Air Conditioner servicing" />
        <meta name="author" content="AC Service Gurgaon" />
      </Head>

      <Navbar></Navbar>
      <ServiceContainer></ServiceContainer>
      <ACCards></ACCards>
      <HowWeWork></HowWeWork>
      <BrandSection></BrandSection>
      <Footer></Footer>
      <WhatsAppToggle/>
    </>
  );
}
