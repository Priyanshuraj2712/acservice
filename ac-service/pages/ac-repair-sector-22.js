import Head from "next/head";
import Navbar from "@/Components/Navbar";
import BlogPostPage from "@/Components/ac-repair-sector-Blog";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Contact() {
  return (
    <>
      <Head>
        <title>AC Repair & Service in Sector 22 Gurgaon | Trusted AC Technicians</title>
        <meta name="description" content="AC Service Gurgaon offers expert AC repair, installation, and maintenance services in Sector 22. Our technicians are certified, with decades of experience, ensuring your AC systems are working at peak performance." />
        <meta name="keywords" content="AC repair in Sector 22, AC servicing, AC installation, AC gas refilling, HVAC solutions, commercial AC repair, air conditioner service Gurgaon, AC maintenance contracts" />
        <meta name="author" content="AC Service Gurgaon" />
      </Head>

      <Navbar></Navbar>
      <BlogPostPage></BlogPostPage>
      <Footer></Footer>
      <WhatsAppToggle/>
    </>
  );
}
