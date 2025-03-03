import Head from "next/head";
import Navbar from "@/Components/Navbar";
import BlogPostPage from "@/Components/best-split-ac";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Contact() {
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Best Split AC Installation in Gurgaon | Expert AC Service</title>
        <meta 
          name="description" 
          content="Need the best split AC installation in Gurgaon? Our expert AC technicians ensure efficient and hassle-free setup for maximum cooling performance. Call now!" 
        />
        <meta 
          name="keywords" 
          content="split AC installation Gurgaon, best AC service Gurgaon, AC installation experts, air conditioner setup, AC technician Gurgaon, professional AC fitting" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AC Service Gurgaon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Best Split AC Installation in Gurgaon | Expert AC Service" />
        <meta property="og:description" content="Looking for professional split AC installation in Gurgaon? Get expert service with guaranteed cooling efficiency. Contact us today!" />
        <meta property="og:image" content="https://acservicegurgaon.com/Best_Ac.png" />
        <meta property="og:url" content="https://acservicegurgaon.com/best-split-ac-installation/" />
        <meta property="og:type" content="article" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Split AC Installation in Gurgaon | Expert AC Service" />
        <meta name="twitter:description" content="Get expert split AC installation in Gurgaon. Reliable service, best prices. Book your AC installation today!" />
        <meta name="twitter:image" content="https://acservicegurgaon.com/Best_Ac.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://acservicegurgaon.com/best-split-ac-installation/" />
      </Head>

      <Navbar></Navbar>
      <BlogPostPage></BlogPostPage>
      <Footer></Footer>
      <WhatsAppToggle/>
    </>
  );
}
