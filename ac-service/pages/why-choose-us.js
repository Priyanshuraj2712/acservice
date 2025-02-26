import Head from "next/head";
import Navbar from "@/Components/Navbar";
import ChoosePage from "@/Components/ChooseUsContent";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function WhyChooseUs() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Why Choose Us | Best AC Service in Gurgaon</title>
        <meta name="description" content="AC Service Gurgaon offers professional AC repair, installation, and maintenance. No hidden fees, certified technicians, and 100% customer satisfaction guarantee." />
        <meta name="keywords" content="AC service Gurgaon, best AC repair, air conditioning maintenance, AC installation, Gurgaon AC experts, home AC repair, commercial AC service" />
        <meta name="author" content="AC Service Gurgaon" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Why Choose Us | Best AC Service in Gurgaon" />
        <meta property="og:description" content="We provide expert AC repair & installation in Gurgaon. No hidden fees, certified technicians, and affordable pricing. Contact us today!" />
        <meta property="og:url" content="https://acservicegurgaon.com/why-choose-us/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://acservicegurgaon.com/assets/why-choose-us.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Choose Us | Best AC Service in Gurgaon" />
        <meta name="twitter:description" content="Certified AC repair and installation service in Gurgaon with upfront pricing and no hidden fees. Get expert service today!" />
        <meta name="twitter:image" content="https://acservicegurgaon.com/assets/twitter-why-choose-us.jpg" />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://acservicegurgaon.com/why-choose-us/" />

        {/* Schema Markup for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AC Service Gurgaon",
            "url": "https://acservicegurgaon.com",
            "image": "https://acservicegurgaon.com/assets/logo.png",
            "description": "We provide professional AC repair, installation, and maintenance services in Gurgaon for residential and commercial clients.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Gurgaon",
              "addressRegion": "HR",
              "postalCode": "122001",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919810954362",
              "contactType": "customer service"
            },
            "serviceProvided": [
              "AC Repair",
              "AC Installation",
              "AC Maintenance",
              "Commercial AC Service"
            ],
            "openingHours": "Mo-Su 08:00-22:00",
            "sameAs": [
              "https://www.facebook.com/acservicegurgaon",
              "https://twitter.com/acservicegurgaon"
            ]
          })}
        </script>
      </Head>

      <Navbar />
      <ChoosePage />
      <Footer />
      <WhatsAppToggle />
    </>
  );
}
