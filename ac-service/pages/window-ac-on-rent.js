import Head from "next/head";
import Navbar from "@/Components/Navbar";
import BlogPostPage from "@/Components/window-ac-Blog";
import Footer from "@/Components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Window AC On Rent in Gurgaon | Affordable AC Rentals</title>
        <meta name="description" content="ACServiceGurgaon offers reliable and affordable Window AC rental services in Gurgaon. Enjoy cost-effective cooling with well-maintained units for homes and offices. Book your Window AC now!" />
        <meta name="keywords" content="Window AC on rent in Gurgaon, affordable AC rental, AC services in Gurgaon, Window AC rental services, budget-friendly AC, AC rental Gurgaon, cooling solutions in Gurgaon" />
        <meta name="author" content="AC Service Gurgaon" />
      </Head>

      <Navbar></Navbar>
      <BlogPostPage></BlogPostPage>
      <Footer></Footer>
    </>
  );
}
