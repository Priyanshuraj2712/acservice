import Head from "next/head";
import Navbar from "@/Components/Navbar";
import BlogPostPage from "@/Components/window-ac-Blog";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Contact() {
  return (
    <>
     <Head>
  {/* Essential Meta Tags */}
  <title>Window AC on Rent in Gurgaon | Affordable & Reliable AC Rental</title>
  <meta 
    name="description" 
    content="Get a Window AC on rent in Gurgaon with flexible rental plans, affordable pricing, and hassle-free installation. Book your AC rental today!" 
  />
  <meta 
    name="keywords" 
    content="Window AC on rent Gurgaon, rent Window AC, AC rental services, air conditioner rental, affordable AC rental, Gurgaon cooling solutions" 
  />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="AC Service Gurgaon" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Window AC on Rent in Gurgaon | Affordable & Reliable AC Rental" />
  <meta property="og:description" content="Need a budget-friendly cooling solution? Rent a high-quality Window AC in Gurgaon with hassle-free installation and transparent pricing!" />
  <meta property="og:image" content="https://acservicegurgaon.com/rent_window.jpeg" />
  <meta property="og:url" content="https://acservicegurgaon.com/window-ac-on-rent" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Window AC on Rent in Gurgaon | Affordable & Reliable AC Rental" />
  <meta name="twitter:description" content="Looking for a Window AC rental in Gurgaon? Get top-quality cooling solutions at affordable rates. Book online today!" />
  <meta name="twitter:image" content="https://acservicegurgaon.com/rent_window.jpeg" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://acservicegurgaon.com/window-ac-on-rent" />
</Head>


      <Navbar></Navbar>
      <BlogPostPage></BlogPostPage>
      <Footer></Footer>
      <WhatsAppToggle/>
    </>
  );
}
