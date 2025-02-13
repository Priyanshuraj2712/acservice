import Head from "next/head";
import Navbar from "@/Components/Navbar";
import BlogPostPage from "@/Components/commercial-residential-ac-Blog";
import Footer from "@/Components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Commercial and Residential AC Repair Services in Gurgaon | ACServiceGurgaon</title>
        <meta name="description" content="Get reliable commercial and residential AC repair services in Sector 23, Gurgaon. Professional installation, maintenance, and emergency repairs for all AC types." />
        <meta name="keywords" content="Commercial AC repair, Residential AC repair, AC installation, AC servicing in Gurgaon, AC repair services, Sector 23 AC repair, split AC repair, window AC servicing" />
        <meta name="author" content="AC Service Gurgaon" />
      </Head>

      <Navbar></Navbar>
      <BlogPostPage></BlogPostPage>
      <Footer></Footer>
    </>
  );
}
