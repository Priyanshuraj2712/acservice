import Head from "next/head";
import Navbar from "@/Components/Navbar";
import BlogPostPage from "@/Components/split-ac-on-rent-Blog";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Contact() {
  return (
    <>
    <Head>
  {/* Essential Meta Tags */}
  <title>Split AC on Rent in Gurgaon | Affordable AC Rental Services</title>
  <meta 
    name="description" 
    content="Looking for Split AC on rent in Gurgaon? Get high-quality AC rental services with flexible plans and no hidden costs. Book your AC rental today!" 
  />
  <meta 
    name="keywords" 
    content="Split AC on rent Gurgaon, AC rental services, rent AC in Gurgaon, best AC rental, air conditioner rental, AC service Gurgaon" 
  />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="AC Service Gurgaon" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Split AC on Rent in Gurgaon | Affordable AC Rental Services" />
  <meta property="og:description" content="Get the best Split AC rental services in Gurgaon with flexible plans and transparent pricing. Hassle-free cooling at budget-friendly rates!" />
  <meta property="og:image" content="https://acservicegurgaon.com/rent_split.jpeg" />
  <meta property="og:url" content="https://acservicegurgaon.com/split-ac-on-rent" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Split AC on Rent in Gurgaon | Affordable AC Rental Services" />
  <meta name="twitter:description" content="Need a Split AC on rent in Gurgaon? Enjoy top-quality AC rentals with no hidden charges. Book now!" />
  <meta name="twitter:image" content="https://acservicegurgaon.com/rent_split.jpeg" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://acservicegurgaon.com/split-ac-on-rent" />
</Head>

      <Navbar></Navbar>
      <BlogPostPage></BlogPostPage>
      <Footer></Footer>
      <WhatsAppToggle/>
    </>
  );
}
