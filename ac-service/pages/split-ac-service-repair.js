import Head from "next/head";
import Navbar from "@/Components/Navbar";
import BlogPostPage from "@/Components/split-ac-service-Blog";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Contact() {
  return (
    <>
      
      <Head>
  {/* Essential Meta Tags */}
  <title>Split AC Service & Repair in Gurgaon | Fast & Affordable AC Repair</title>
  <meta 
    name="description" 
    content="Get professional Split AC service and repair in Gurgaon. Reliable technicians, fast service, and affordable prices. Book your AC repair today!" 
  />
  <meta 
    name="keywords" 
    content="Split AC service Gurgaon, Split AC repair, AC servicing, air conditioner repair Gurgaon, best AC technician, AC maintenance" 
  />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="AC Service Gurgaon" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Split AC Service & Repair in Gurgaon | Fast & Affordable AC Repair" />
  <meta property="og:description" content="Looking for expert Split AC service in Gurgaon? Get hassle-free repair and maintenance at the best prices. Contact us now!" />
  <meta property="og:image" content="https://acservicegurgaon.com/Split-AC.jpg" />
  <meta property="og:url" content="https://acservicegurgaon.com/split-ac-service-repair" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Split AC Service & Repair in Gurgaon | Fast & Affordable AC Repair" />
  <meta name="twitter:description" content="Need Split AC service or repair in Gurgaon? Get expert technicians for quick and budget-friendly AC maintenance!" />
  <meta name="twitter:image" content="https://acservicegurgaon.com/Split-AC.jpg" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://acservicegurgaon.com/split-ac-service-repair" />
</Head>

      <Navbar></Navbar>
      <BlogPostPage></BlogPostPage>
      <Footer></Footer>
      <WhatsAppToggle/>
    </>
  );
}
