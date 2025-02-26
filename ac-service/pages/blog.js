import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Blogcontent from "@/Components/Blogmain";
import Footer from "@/Components/Footer";
import WhatsAppToggle from "@/Components/WhatsApp";

export default function Blog() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>AC Service Gurgaon Blog | Best AC Repair & Installation Tips</title>
        <meta 
          name="description" 
          content="Read expert blogs on AC repair, maintenance, installation, and rental services in Gurgaon. Get the latest tips on split and window AC servicing today!" 
        />
        <meta 
          name="keywords" 
          content="AC blog Gurgaon, AC repair tips, best AC service in Gurgaon, split AC installation, window AC rental, AC maintenance guide, air conditioning solutions" 
        />
        <meta name="author" content="AC Service Gurgaon" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="AC Service Gurgaon Blog | Best AC Repair & Installation Tips" />
        <meta 
          property="og:description" 
          content="Explore AC service tips, installation guides, and repair solutions in Gurgaon. Stay cool with expert advice from AC Service Gurgaon." 
        />
        <meta property="og:url" content="https://acservicegurgaon.com/blog/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://acservicegurgaon.com/assets/blog-banner.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AC Service Gurgaon Blog | Best AC Repair & Installation Tips" />
        <meta 
          name="twitter:description" 
          content="Read expert blogs on AC repair, maintenance, and installation in Gurgaon. Get tips on split AC rental, servicing, and more!" 
        />
        <meta name="twitter:image" content="https://acservicegurgaon.com/assets/twitter-blog.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://acservicegurgaon.com/blog/" />

        {/* Schema Markup for Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "AC Service Gurgaon Blog",
            "url": "https://acservicegurgaon.com/blog/",
            "description": "Stay updated with AC repair, installation, and maintenance tips in Gurgaon. Learn about split AC rentals, servicing, and more!",
            "publisher": {
              "@type": "Organization",
              "name": "AC Service Gurgaon",
              "logo": {
                "@type": "ImageObject",
                "url": "https://acservicegurgaon.com/assets/logo.png"
              }
            },
            "blogPosts": [
              {
                "@type": "BlogPosting",
                "headline": "Best Split AC Installation: Gurgaon Residents",
                "datePublished": "2024-05-02",
                "author": { "@type": "Person", "name": "AC Service Gurgaon" },
                "url": "https://acservicegurgaon.com/blog/best-split-ac-installation/"
              },
              {
                "@type": "BlogPosting",
                "headline": "Split AC on Rent in Gurgaon",
                "datePublished": "2024-01-25",
                "author": { "@type": "Person", "name": "AC Service Gurgaon" },
                "url": "https://acservicegurgaon.com/blog/split-ac-rent-gurgaon/"
              },
              {
                "@type": "BlogPosting",
                "headline": "Window AC on Rent in Gurgaon",
                "datePublished": "2024-01-24",
                "author": { "@type": "Person", "name": "AC Service Gurgaon" },
                "url": "https://acservicegurgaon.com/blog/window-ac-rent-gurgaon/"
              }
            ]
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
