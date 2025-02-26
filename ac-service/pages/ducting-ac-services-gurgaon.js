import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ACServiceComponent from "@/Components/Ductable";
import WhatsAppToggle from "@/Components/WhatsApp";

const DuctableACPage = () => {
  return (
    <>
      <Head>
        {/* Optimized Title */}
        <title>Best Ductable AC Repair & Maintenance Services in Gurgaon | AC Experts</title>

        {/* Improved Meta Description */}
        <meta 
          name="description" 
          content="Looking for expert Ductable AC repair in Gurgaon? We offer fast, reliable AC servicing, installation & duct cleaning. Book a service today!" 
        />
        
        {/* Keyword Optimization */}
        <meta 
          name="keywords" 
          content="Ductable AC repair Gurgaon, best AC service in Gurgaon, duct cleaning services, HVAC maintenance, commercial AC repair" 
        />

        <meta name="author" content="AC Service Gurgaon" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags for Social Media */}
        <meta property="og:title" content="Best Ductable AC Repair & Maintenance Services in Gurgaon" />
        <meta 
          property="og:description" 
          content="Professional ductable AC servicing & repair in Gurgaon. Get expert duct cleaning & HVAC maintenance. Call now for hassle-free service!" 
        />
        <meta property="og:url" content="https://acservicegurgaon.com/ductable-ac-services-gurgaon" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://acservicegurgaon.com/assets/ductable-ac-repair.jpg" />

        {/* Canonical Tag for SEO */}
        <link rel="canonical" href="https://acservicegurgaon.com/ductable-ac-services-gurgaon" />

        {/* JSON-LD Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ductable AC Repair & Maintenance",
            "description": "Expert ductable AC repair, maintenance, and duct cleaning services in Gurgaon.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "AC Service Gurgaon",
              "areaServed": "Gurgaon, India",
              "url": "https://acservicegurgaon.com/ductable-ac-services-gurgaon",
              "telephone": "+91-XXXXXXXXXX"
            },
            "serviceType": "Ductable AC Repair",
            "image": "https://acservicegurgaon.com/assets/ductable-ac-repair.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sector 14, Gurgaon",
              "addressLocality": "Gurgaon",
              "addressRegion": "Haryana",
              "postalCode": "122001",
              "addressCountry": "IN"
            }
          })}
        </script>
      </Head>

      <Navbar />
      <main>
        <h1>Ductable AC Repair & Maintenance Services in Gurgaon</h1>
        <ACServiceComponent />
      </main>
      <Footer />
      <WhatsAppToggle />
    </>
  );
};

export default DuctableACPage;
