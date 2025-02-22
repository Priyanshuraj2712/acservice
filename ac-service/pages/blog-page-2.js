import Head from "next/head";
import Navbar from "@/Components/Navbar";
import OlderBlogs from "@/Components/blog-page-2";// Import the component for page 2
import Footer from "@/Components/Footer";

export default function BlogPageTwo() {
  return (
    <>
      <Head>
        <title>Older Blog Entries | Gurgaon AC Services</title>
        <meta name="description" content="Find older blog posts about AC repair, installation, and services in Gurgaon." />
        <meta name="keywords" content="AC repair, AC maintenance, Gurgaon AC services, old blog posts, HVAC solutions" />
        <meta name="author" content="AC Service Gurgaon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Older Blog Entries | Gurgaon AC Services" />
        <meta property="og:description" content="Read our previous blog posts on AC repair, servicing, and rental solutions." />
        <meta property="og:url" content="https://acservicegurgaon.com/blog-page-2" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <OlderBlogs></OlderBlogs>  {/* Renders older blog posts */}
      <Footer />
    </>
  );
}
