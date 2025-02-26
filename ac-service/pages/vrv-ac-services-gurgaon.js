import Head from "next/head";
import Navbar from "@/Components/Navbar";
import VRV_VRF_Services from "@/Components/VRV";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function VRV_VRF_ACPage() {
  return (
    <>
      <Head>
        {/* Optimized Title */}
        <title>Best VRV & VRF AC Services in Gurgaon | Installation, Repair & Maintenance</title>

        {/* Improved Meta Description */}
        <meta 
          name="description" 
          content="Expert VRV & VRF AC installation, repair, gas refilling, and maintenance in Gurgaon. Certified technicians for Daikin, Mitsubishi, Toshiba & more. Call now!" 
        />
        
        {/* Keyword Optimization */}
        <meta 
          name="keywords" 
          content="VRV AC service Gurgaon, VRF AC installation, VRV repair, VRF gas refilling, HVAC maintenance, best AC service Gurgaon, Daikin VRV, Mitsubishi VRF, Toshiba AC repair" 
        />

        <meta name="author" content="AC Service Gurgaon" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags for Social Media */}
        <meta property="og:title" content="Best VRV & VRF AC Services in Gurgaon | Installation & Repair" />
        <meta 
          property="og:description" 
          content="AC Service Gurgaon provides professional VRV & VRF AC services, including installation, repair, and maintenance. Book an expert technician today!" 
        />
        <meta property="og:url" content="https://acservicegurgaon.com/vrv-ac-services-gurgaon" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://acservicegurgaon.com/assets/vrv-vrf-ac-service.jpg" />

        {/* Canonical Tag for SEO */}
        <link rel="canonical" href="https://acservicegurgaon.com/vrv-ac-services-gurgaon" />

        {/* JSON-LD Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "VRV & VRF AC Services",
            "description": "Professional VRV & VRF AC installation, repair, and maintenance services in Gurgaon.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "AC Service Gurgaon",
              "areaServed": "Gurgaon, India",
              "url": "https://acservicegurgaon.com/vrv-ac-services-gurgaon",
              "telephone": "+91-XXXXXXXXXX"
            },
            "serviceType": "VRV & VRF AC Repair",
            "image": "https://acservicegurgaon.com/assets/vrv-vrf-ac-service.jpg",
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
        <h1>VRV & VRF AC Installation, Repair & Maintenance Services in Gurgaon</h1>
        <VRV_VRF_Services />
      </main>
      <Footer />
      <WhatsAppToggle />
    </>
  );
}
