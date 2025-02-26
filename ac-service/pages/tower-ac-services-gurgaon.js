import Head from "next/head";
import Navbar from "@/Components/Navbar";
import ACServiceComponent from "@/Components/Tower";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

const Tower_AC_Services = () => {
  return (
    <>
      <Head>
        {/* Optimized Page Title */}
        <title>Best Tower AC Repair & Maintenance in Gurgaon | Expert AC Services</title>

        {/* Enhanced Meta Description */}
        <meta 
          name="description" 
          content="AC Service Gurgaon offers professional Tower AC repair, installation, and maintenance services in Gurgaon. Certified technicians, energy-efficient solutions & affordable pricing. Call now!" 
        />

        {/* SEO-Optimized Keywords */}
        <meta 
          name="keywords" 
          content="Tower AC repair Gurgaon, Tower AC service, Tower AC installation, air conditioner maintenance, HVAC solutions, best AC service in Gurgaon, energy-efficient cooling" 
        />

        <meta name="author" content="AC Service Gurgaon" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags for Social Sharing */}
        <meta property="og:title" content="Best Tower AC Repair & Maintenance in Gurgaon | Expert Services" />
        <meta 
          property="og:description" 
          content="Get expert Tower AC repair, servicing & maintenance in Gurgaon. Professional AC solutions for better cooling & efficiency. Book a service today!" 
        />
        <meta property="og:url" content="https://acservicegurgaon.com/tower-ac-services-gurgaon" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://acservicegurgaon.com/assets/tower-ac-service.jpg" />

        {/* Canonical URL to Prevent Duplicate Content */}
        <link rel="canonical" href="https://acservicegurgaon.com/tower-ac-services-gurgaon" />

        {/* JSON-LD Structured Data for Better Google Indexing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Tower AC Repair & Maintenance",
            "description": "Expert Tower AC installation, repair, and maintenance services in Gurgaon.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "AC Service Gurgaon",
              "areaServed": "Gurgaon, India",
              "url": "https://acservicegurgaon.com/tower-ac-services-gurgaon",
              "telephone": "+91-XXXXXXXXXX"
            },
            "serviceType": "Tower AC Repair",
            "image": "https://acservicegurgaon.com/assets/tower-ac-service.jpg",
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
        <h1>Expert Tower AC Repair & Maintenance in Gurgaon</h1>
        <ACServiceComponent />
      </main>
      <Footer />
      <WhatsAppToggle />
    </>
  );
};

export default Tower_AC_Services;
