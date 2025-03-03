import Head from "next/head";
import Navbar from "@/Components/Navbar";
import OlderBlogs from "@/Components/blog-page-2";// Import the component for page 2
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function BlogPageTwo() {
  return (
    <>
      <Navbar />
      <OlderBlogs></OlderBlogs>  {/* Renders older blog posts */}
      <Footer />
      <WhatsAppToggle/>
    </>
  );
}
