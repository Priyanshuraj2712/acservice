import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Blogmain.module.css";

const olderBlogs = [
  {
    title: "AC Repair and Services Sushant Lok Gurgaon",
    date: "Feb 20, 2021",
    categories: ["Uncategorized"],
    summary: "We are AC Services Gurgaon working in AC Repair and Services in Sushant Lok Gurgaon from 2008. ...",
    link: "/ac-repair-and-services-sushant-lok-gurgaon",
    image: "/ac-repair-sushant-lok.jpg",
  },
  {
    title: "AC Repair & Services in Gurgaon DLF Phase 2",
    date: "Feb 20, 2021",
    categories: ["AC Service"],
    summary: "Gurgaon has a rich history of pioneering families who have built up a warm community and demand reliable AC repair services and deserve them....",
    link: "/ac-repair-services-in-gurgaon-dlf-phase-2",
    image: "/ac-repair-and-service.webp",
  },
  {
    title: "Window & Split AC Repair & Gas Filling Service in DLF Phase 1 Gurgaon",
    date: "Feb 10, 2021",
    categories: ["AC Service"],
    summary: "When we have harsh weather conditions today, air conditioners offer warmth so that you feel more relaxed. Air conditioners increase the consistency of indoor air and create a healthy environment. Do you need an AC repair in DLF phase 1 Gurgaon?....",
    link: "/window-split-ac-repair-gas-filling-service-in-dlf-phase-1-gurgaon",
    image: "/ac-repair-service_DLF.jpg",
  },
  {
    title: "Best AC Service in Sector 12 Gurgaon | AC repair services in Gurgaon Sector 12 near Bus Stand",
    date: "Apr 19, 2020",
    categories: ["Uncategorized"],
    summary: "Call the best AC repair services in Gurgaon Sector 12 Exceptional Service Is Our Promise Trust in us because we: Native AC mechanic in Sector 12 Same day repair and maintenance We provide a guarantee or warranty for our services ...",
    link: "/best-ac-repair-service-in-sector-12-gurgaon",
    image: "/AC-repair-services-in-gurgaon-sector-12.jpg",
  },
  {
    title: "AC repair in gurgaon sector 14, sector 15 AC mechanic in sector 49",
    date: "Apr 22, 2018",
    categories: ["Cassette Ac", "Ducting Ac", "Split Ac", "Window Ac"],
    summary: "AC Repair services in Gurgaon Sector 14, sector 15 AC mechanic in sector 49. Call +91-9810954362 for AC Mechanics in Gurgaon or mail us at info@acservicegurgaon.com ...",
    link: "/ac-repair-gurgaon-sector-14",
    image: "/ac-repair-in-gurgoan.webp",
  },{
    title: "Choose Our Top-Rated, Reliable Split AC repairing Services in Gurgaon",
    date: "Mar 18, 2018",
    categories: ["Uncategorized"],
    summary: "We are AC Services Gurgaon working in AC Repair and Services in Sushant Lok Gurgaon from 2008. ...",
    link: "/split-ac-repair-gurgaon",
    image: "/reliable-split-ac.webp",
  },
  {
    title: "CAN AN HVAC SYSTEM INCREASE THE VALUE OF YOUR HOME?",
    date: "Feb 12, 2018",
    categories: ["Cassette Ac", "Ducting Ac", "Split Ac", "Window Ac"],
    summary: "Choose Our Top-Rated, Reliable Gurgaon Split AC repairing Services! written by: Ashish Pandey Repair, Service & Maintenance All brand air conditioners repairing, installation and servicing by AC Experts Technicians in all over Gurgaon. As a Gurgaon resident, we know...",
    link: "/can-an-hvac-system-increase-the-value-of-your-home",
    image: "/hvac-increases-home-value.jpg",
  },
];

const OlderBlogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = olderBlogs.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredBlogs = olderBlogs.map((post) => ({
    title: post.title,
    link: post.link,
  }));

  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.heading}>Older Blog Entries</h1>
      </div>

      <div className={styles.container}>
  {/* Blog Section */}
  <div className={styles.blogSection}>
    {filteredBlogs.map((post, index) => (
      <a key={index} href={post.link} className={styles.post}>
        <img src={post.image} alt={post.title} />
        <div>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.meta}>
            {post.date} | {post.categories.join(", ")}
          </p>
          <p className={styles.summary}>{post.summary}</p>
        </div>
      </a>
    ))}
  </div>

  {/* Sidebar */}
  <div className={styles.sidebar}>
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search blog..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

    <div className={styles.featuredPosts}>
      <h3>Featured Blogs</h3>
      {featuredBlogs.map((blog, index) => (
        <div key={index} className={styles.featuredPost}>
          <a href={blog.link}>{blog.title}</a>
        </div>
      ))}
    </div>

    <div className={styles.popularCategories}>
      <h3>Popular Categories</h3>
      <ul>
        {[
          { name: "Window AC", link: "/window" },
          { name: "Split AC", link: "/split" },
          { name: "Cassette AC", link: "/cassette" },
          { name: "Ductable AC", link: "/ductable" },
          { name: "AC on rent", link: "/split-ac-on-rent" },
        ].map((category, index) => (
          <li key={index}>
            <Link href={category.link}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>


      <div className={styles.olderEntries}>
        <Link href="/blog">
          <button className={styles.olderButton}>Newer Entries</button>
        </Link>
      </div>
    </>
  );
};

export default OlderBlogs;
