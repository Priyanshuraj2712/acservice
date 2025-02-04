import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const services = [
    'Window AC',
    'Split AC',
    'Cassette AC',
    'Ductable AC',
    'VRV/VRF AC',
    'Tower AC',
    'AHU/CFU AC',
    'AC On Rent',
    'Copper Pipe Fitting',
    
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // Delay to allow smooth transitions
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className={styles.topBar}>
        <span>
          📞 <a href="tel:+91810954362" className={styles.contactLink}>+91810954362</a> and <a href="tel:+917011132581" className={styles.contactLink}>+917011132581</a>
        </span>
      </div>

      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <Link href="/">
            <img
              src="/logo.png"
              alt="AC Service Gurgaon"
              className={styles.logo}
            />
          </Link>
        </div>

        <div className={styles.navbarLinks}>
          <Link href="/" className={styles.navbarLink}>
            Home
          </Link>

          <Link href="/about" className={styles.navbarLink}>
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className={styles.servicesDropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`${styles.navbarLink} ${styles.dropdownTrigger}`}>
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>

            {isServicesOpen && (
              <div className={styles.dropdownMenu}>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className={styles.dropdownItem}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/why-choose-us" className={styles.navbarLink}>
            Why Choose Us?
          </Link>

          <Link href="/blog" className={styles.navbarLink}>
            Blog
          </Link>

          <Link href="/contact" className={styles.navbarLink}>
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
