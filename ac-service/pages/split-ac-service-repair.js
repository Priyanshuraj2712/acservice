import Head from "next/head";
import Navbar from "@/Components/Navbar";
import BlogPostPage from "@/Components/split-ac-service-Blog";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Split AC Service & Repair in Gurgaon | ACServiceGurgaon</title>
        <meta name="description" content="Get reliable and affordable split AC service and repair in Gurgaon. Fast and efficient repairs for all types of split ACs at ACServiceGurgaon." />
        <meta name="keywords" content="Split AC service, AC repair Gurgaon, Split AC repair Gurgaon, AC maintenance, AC repair services, Split air conditioner service, Gurgaon AC services" />
        <meta name="author" content="AC Service Gurgaon" />
      </Head>

      <Navbar></Navbar>
      <BlogPostPage></BlogPostPage>
      <Footer></Footer>
      <WhatsAppToggle/>
    </>
  );
}
