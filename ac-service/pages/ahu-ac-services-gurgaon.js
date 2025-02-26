import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ACServiceComponent from "@/Components/AHU";
import WhatsAppToggle from "@/Components/WhatsApp";

const AHU_AC_Services = () => {
  return (
    <>
      <Head>
        {/* SEO-Optimized Page Title */}
        <title>Best AHU Air Conditioning System Maintenance in Gurgaon | HVAC Experts</title>

        {/* Optimized Meta Description */}
        <meta 
          name="description" 
          content="Expert AHU air conditioning system maintenance services in Gurgaon. Our certified technicians provide AHU cleaning, coil servicing, filter replacement & complete HVAC solutions. Book now!" 
        />

        {/* SEO-Optimized Keywords */}
        <meta 
          name="keywords" 
          content="AHU maintenance Gurgaon, air handling unit service, HVAC maintenance, commercial AHU repair, industrial HVAC solutions, best AHU service in Gurgaon, clean air solutions" 
        />

        <meta name="author" content="AC Service Gurgaon" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags for Social Sharing */}
        <meta property="og:title" content="Best AHU Air Conditioning System Maintenance in Gurgaon | HVAC Experts" />
        <meta 
          property="og:description" 
          content="Professional AHU maintenance services for offices, industries, hospitals, and residential complexes. Improve air quality, efficiency & system longevity. Contact us today!" 
        />
        <meta property="og:url" content="https://acservicegurgaon.com/ahu-ac-services-gurgaon" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://acservicegurgaon.com/assets/ahu-service.jpg" />

        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://acservicegurgaon.com/ahu-ac-services-gurgaon" />

        {/* JSON-LD Structured Data for Google Indexing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AHU Maintenance & HVAC Services",
            "description": "Expert AHU air conditioning system maintenance, cleaning, and servicing in Gurgaon.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "AC Service Gurgaon",
              "areaServed": "Gurgaon, India",
              "url": "https://acservicegurgaon.com/ahu-ac-services-gurgaon",
              "telephone": "+91-XXXXXXXXXX"
            },
            "serviceType": "AHU Maintenance",
            "image": "https://acservicegurgaon.com/assets/ahu-service.jpg",
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
        <h1>Professional AHU Air Conditioning System Maintenance in Gurgaon</h1>
        <ACServiceComponent />
      </main>
      <Footer />
      <WhatsAppToggle />
    </>
  );
};

export default AHU_AC_Services;
