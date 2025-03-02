import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Blogcontent from "@/Components/Blogmain";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Blog() {
  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Our Blog - AC Repair & Installation Guides | AC Service Gurgaon</title>
        <meta 
          name="description" 
          content="Stay updated with expert AC repair, service, installation, and rental guides. Read our latest AC maintenance tips and tricks in Gurgaon." 
        />
        <meta 
          name="keywords" 
          content="AC repair blog, AC service tips, AC installation guide, AC maintenance, air conditioner solutions, Gurgaon AC services" 
        />
        <meta name="author" content="AC Service Gurgaon" />

        {/* Open Graph (OG) Tags for Social Media (No Image) */}
        <meta property="og:title" content="Our Blog - AC Repair & Installation Guides | AC Service Gurgaon" />
        <meta property="og:description" content="Stay updated with expert AC repair, service, installation, and rental guides. Read our latest AC maintenance tips and tricks in Gurgaon." />
        <meta property="og:url" content="https://acservicegurgaon.com/blog/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Blog - AC Repair & Installation Guides | AC Service Gurgaon" />
        <meta name="twitter:description" content="Stay updated with expert AC repair, service, installation, and rental guides. Read our latest AC maintenance tips and tricks in Gurgaon." />

        {/* Schema Markup for Google SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Our Blog - AC Repair & Installation Guides",
            "url": "https://acservicegurgaon.com/blog/",
            "description": "Stay updated with expert AC repair, service, installation, and rental guides. Read our latest AC maintenance tips and tricks in Gurgaon.",
            "publisher": {
              "@type": "Organization",
              "name": "AC Service Gurgaon"
            },
            "author": {
              "@type": "Organization",
              "name": "AC Service Gurgaon"
            }
          })}
        </script>
      </Head>

      <Navbar />
      <Blogcontent />
      <Footer />
      <WhatsAppToggle />
    </>
  );
}
