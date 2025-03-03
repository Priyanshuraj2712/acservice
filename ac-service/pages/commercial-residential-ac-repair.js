import Head from "next/head";
import Navbar from "@/Components/Navbar";
import BlogPostPage from "@/Components/commercial-residential-ac-Blog";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Contact() {
  return (
    <>
      
      <Head>
  {/* Essential Meta Tags */}
  <title>Commercial & Residential AC Repair in Gurgaon | 24/7 AC Services</title>
  <meta 
    name="description" 
    content="Get expert commercial and residential AC repair services in Gurgaon. 24/7 emergency AC service, installation, and maintenance for all AC types." 
  />
  <meta 
    name="keywords" 
    content="Commercial AC repair Gurgaon, Residential AC service, AC maintenance, central air conditioning repair, split AC repair, AC installation" 
  />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="AC Service Gurgaon" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Commercial & Residential AC Repair in Gurgaon | 24/7 AC Services" />
  <meta property="og:description" content="Looking for fast and reliable AC repair services in Gurgaon? We offer expert commercial and residential AC services, including maintenance & installation." />
  <meta property="og:image" content="https://acservicegurgaon.com/Commercial-AC.jpg" />
  <meta property="og:url" content="https://acservicegurgaon.com/commercial-residential-ac-repair" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Commercial & Residential AC Repair in Gurgaon | 24/7 AC Services" />
  <meta name="twitter:description" content="Need commercial or residential AC repair in Gurgaon? We provide professional AC maintenance and installation services." />
  <meta name="twitter:image" content="https://acservicegurgaon.com/Commercial-AC.jpg" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://acservicegurgaon.com/commercial-residential-ac-repair" />
</Head>

      <Navbar></Navbar>
      <BlogPostPage></BlogPostPage>
      <Footer></Footer>
      <WhatsAppToggle/>
    </>
  );
}
