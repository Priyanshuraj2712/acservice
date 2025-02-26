import Head from "next/head";
import Navbar from "@/Components/Navbar";
import ContactBanner from "@/Components/ContactBanner";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Contact() {
    return (
      <>
        <Head>
          {/* Primary Meta Tags */}
          <title>Contact Us | AC Repair & Service in Gurgaon</title>
          <meta name="description" content="Get in touch with us for AC repair, maintenance, and installation services in Gurgaon. Available all 7 days from 8 AM - 10 PM." />
          <meta name="keywords" content="Contact AC repair Gurgaon, AC service contact, Gurgaon AC maintenance, AC installation support, emergency AC service Gurgaon" />
          <meta name="author" content="AC Service Gurgaon" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph / Facebook Meta Tags */}
          <meta property="og:title" content="Contact Us | AC Repair & Service in Gurgaon" />
          <meta property="og:description" content="Reach out for expert AC repair, installation, and maintenance services in Gurgaon. Call us today!" />
          <meta property="og:url" content="https://acservicegurgaon.com/contact-us/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://acservicegurgaon.com/assets/contact-banner.jpg" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Contact Us | AC Repair & Service in Gurgaon" />
          <meta name="twitter:description" content="Book AC repair & maintenance services in Gurgaon. Call us or drop a message today!" />
          <meta name="twitter:image" content="https://acservicegurgaon.com/assets/twitter-contact.jpg" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://acservicegurgaon.com/contact-us/" />

          {/* Schema Markup for Local Business */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "AC Service Gurgaon",
              "url": "https://acservicegurgaon.com/",
              "logo": "https://acservicegurgaon.com/assets/logo.png",
              "image": "https://acservicegurgaon.com/assets/contact-banner.jpg",
              "description": "Expert AC repair and installation services in Gurgaon. Available 7 days a week from 8 AM - 10 PM.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "195/1 Lajpat Nagar",
                "addressLocality": "Gurgaon",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919810954362",
                "contactType": "Customer Support"
              },
              "openingHours": "Mo-Su 08:00-22:00"
            })}
          </script>
        </Head>

        <Navbar />
        <ContactBanner />

        {/* Contact Section with Address & Contact Details */}
        <section className="px-6 py-10 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Leave Us a Message</h2>
            <p className="text-gray-600 mt-2">Fill out the form below, and we’ll get back to you as soon as possible.</p>
          </div>
          <ContactForm />
          
          {/* Contact Info */}
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
            <p className="text-gray-600 mt-2">We are available 7 days a week from 8 AM - 10 PM.</p>
            <p className="text-lg font-semibold mt-4">📍 Address: 195/1 Lajpat Nagar, Gurgaon</p>
            <p className="text-lg mt-2">📞 Phone: <a href="tel:+919810954362" className="text-blue-600">+91-9810954362</a></p>
            <p className="text-lg">☎️ Landline: <a href="tel:+917011132581" className="text-blue-600">+91-7011132581</a></p>
          </div>
        </section>

        <Footer />
        <WhatsAppToggle/>
      </>
    );
}
