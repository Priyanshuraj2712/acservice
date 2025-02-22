import Head from "next/head";
import Navbar from "@/Components/Navbar";
import VRV_VRF_Services from "@/Components/VRV";
import Footer from "@/Components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>VRV/VRF AC Services in Gurgaon | Installation, Repair, and Maintenance</title>
        <meta name="description" content="AC Service Gurgaon offers expert VRV and VRF air conditioner installation, repair, maintenance, and gas refilling services. Our certified technicians ensure energy-efficient and reliable solutions for homes and businesses in Gurgaon." />
        <meta name="keywords" content="VRV AC service, VRF AC service, VRV AC installation, VRF AC repair, VRV maintenance, VRF gas refilling, AC service in Gurgaon, HVAC solutions, Daikin, Mitsubishi, Toshiba" />
        <meta name="author" content="AC Service Gurgaon" />
      </Head>

      <Navbar></Navbar>
      <VRV_VRF_Services></VRV_VRF_Services>
      <Footer></Footer>
    </>
  );
}
