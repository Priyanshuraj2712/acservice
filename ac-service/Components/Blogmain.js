import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import styles from '@/styles/Blogmain.module.css';

const blogPosts = [
  {
    title: 'Best Split AC Installation: Gurgaon Residents',
    date: 'May 2, 2024',
    categories: ['Cassette AC', 'Ducting AC', 'Split AC', 'Uncategorized', 'Window AC'],
    summary: 'A Split Air Conditioner system has become a necessity rather than a luxury...',
    link: '/blog/best-split-ac-installation',
    image: '/Best_Ac.png',
  },
  {
    title: 'Split AC on Rent in Gurgaon',
    date: 'Jan 25, 2024',
    categories: ['Split AC'],
    summary: 'ACServiceGurgaon.com stands out as the preferred choice for those seeking reliable AC rental...',
    link: '/blog/split-ac-on-rent',
    image: '/rent_split.jpeg',
  },
  {
    title: 'Window AC On Rent in Gurgaon',
    date: 'Jan 24, 2024',
    categories: ['Window AC'],
    summary: 'Welcome to ACServiceGurgaon.com, your one-stop destination for hassle-free Window AC rentals...',
    link: '/blog/window-ac-on-rent',
    image: 'rent_window.jpeg',
  },
];

const featuredBlogs = [
  { title: "Best Split AC Installation: Gurgaon Residents", link: "/blog/clean-ac-filter" },
  { title: "Split AC on rent in Gurgaon", link: "/blog/ac-repair-signs" },
  { title: "Window AC on rent in Gurgaon", link: "/blog/right-ac-home" },
  { title: "Split AC service repair in Gurgaon – Split AC mechanic in Sector 21", link: "/blog/right-ac-home" },
  { title: "Commercial and Residential AC Repair Services in Sector 23 Gurgaon", link: "/blog/right-ac-home" },
];

const Blogcontent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter blogs based on search
  const filteredBlogs = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className={styles.banner}>
        <h1 className={styles.heading}>Our Blog</h1>
      </div>

      <div className={styles.container}>
        {/* Left Side: Blog Posts */}
        <div className={styles.blogSection}>
          {filteredBlogs.map((post, index) => (
            <a key={index} href={post.link} className={styles.post}>
              <img src={post.image} alt={post.title} />
              <div>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.meta}>
                  {post.date} | {post.categories.join(', ')}
                </p>
                <p className={styles.summary}>{post.summary}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Right Side: Sidebar */}
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogcontent;
