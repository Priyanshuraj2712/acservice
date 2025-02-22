import Head from "next/head";
import Navbar from "@/Components/Navbar";
import BlogPostPage from "@/Components/best-split-ac";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Best Split AC Installation in Gurgaon | Expert AC Services</title>
        <meta name="description" content="AC Service Gurgaon offers expert split AC installation in Gurgaon. Learn about the essential steps for optimal performance and longevity of your split AC system, ensuring comfort throughout the hot season." />
        <meta name="keywords" content="split AC installation, AC installation in Gurgaon, air conditioning installation, expert AC services, HVAC solutions, air cooling, split air conditioner installation" />
        <meta name="author" content="AC Service Gurgaon" />
      </Head>

      <Navbar></Navbar>
      <BlogPostPage></BlogPostPage>
      <Footer></Footer>
      <WhatsAppToggle/>
    </>
  );
}
