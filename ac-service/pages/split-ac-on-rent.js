import Head from "next/head";
import Navbar from "@/Components/Navbar";
import BlogPostPage from "@/Components/split-ac-on-rent-Blog";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Split AC on Rent in Gurgaon | ACServiceGurgaon</title>
        <meta name="description" content="Rent high-quality split ACs in Gurgaon at ACServiceGurgaon.com. Affordable pricing, flexible rental plans, and hassle-free cooling for your space." />
        <meta name="keywords" content="Split AC on rent in Gurgaon, AC rental Gurgaon, Rent AC, affordable AC rental, flexible AC plans, cooling solutions in Gurgaon, split air conditioner rental" />
        <meta name="author" content="AC Service Gurgaon" />
      </Head>

      <Navbar></Navbar>
      <BlogPostPage></BlogPostPage>
      <Footer></Footer>
      <WhatsAppToggle/>
    </>
  );
}
