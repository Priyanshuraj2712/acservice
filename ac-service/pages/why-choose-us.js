import Head from "next/head";
import Navbar from "@/Components/Navbar";
import ChoosePage from "@/Components/ChooseUsContent";
import Footer from "@/Components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Why Choose AC Service Gurgaon | Trusted AC Mechanic in Gurgaon</title>
        <meta name="description" content="AC Service Gurgaon is your trusted family AC mechanic in Gurgaon, offering upfront pricing, certified technicians, and reliable AC repair, installation, and maintenance services. No hidden fees, just quality service." />
        <meta name="keywords" content="AC service Gurgaon, AC repair Gurgaon, certified AC technicians, HVAC solutions, air conditioning installation, family-owned AC service, upfront pricing, air quality solutions" />
        <meta name="author" content="AC Service Gurgaon" />
      </Head>

      <Navbar></Navbar>
      <ChoosePage></ChoosePage>
      <Footer></Footer>
    </>
  );
}
