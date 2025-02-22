import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const services = [
    { name: 'Window AC', link: '/window-ac-services-gurgaon' },
    { name: 'Split AC', link: '/split-ac-services' },
    { name: 'Cassette AC', link: '/cassette-ac-services-gurgaon' },
    { name: 'Ductable AC', link: '/ducting-ac-services-gurgaon' },
    { name: 'VRV/VRF AC', link: '/vrv-ac-services-gurgaon' },
    { name: 'Tower AC', link: '/tower-ac-services-gurgaon' },
    { name: 'AHU AC', link: '/ahu-ac-services-gurgaon' },
    { name: 'AC On Rent', link: '/split-ac-on-rent' },
    { name: 'Copper Pipe Fitting', link: '/copper-pipe-fitting' },
  ];

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = React.useCallback(() => {
    if (!isMobileView) {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      setIsServicesOpen(true);
    }
  }, [isMobileView]);
  
  const handleMouseLeave = React.useCallback(() => {
    if (!isMobileView) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setIsServicesOpen(false);
      }, 300);
    }
  }, [isMobileView]);
  

  const handleMobileClick = (e) => {
    e.stopPropagation();
    setIsServicesOpen((prev) => !prev);
  };
  

  return (
    <>
      {/* Top Contact Bar */}
      <div className={styles.topBar}>
        <span>
          📞 <a href="tel:+919810954362" className={styles.contactLink}>+919810954362</a> & 
          <a href="tel:+917011132581" className={styles.contactLink}> +917011132581</a>
        </span>
      </div>

      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <Link href="/">
            <img src="/logo.png" alt="AC Service Gurgaon" className={styles.logo} />
          </Link>
        </div>

        {/* Navbar Links */}
        <div className={styles.navbarLinks}>
          <Link href="/" className={styles.navbarLink}>Home</Link>
          <Link href="/about-us" className={styles.navbarLink}>About Us</Link>

          {/* Services Dropdown */}
          <div 
            className={`${styles.servicesDropdown} ${isServicesOpen ? "active" : ""}`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={isMobileView ? handleMobileClick : null}
          >
            <div className={`${styles.navbarLink} ${styles.dropdownTrigger}`}>
              Services
              <ChevronDown className={`${styles.dropdownIcon} ${isServicesOpen ? styles.rotate : ''}`} />
            </div>

            {isServicesOpen && (
              <div className={styles.dropdownMenu}>
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    href={service.link} 
                    className={styles.dropdownItem}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/why-choose-us" className={styles.navbarLink}>Why Choose Us?</Link>
          <Link href="/blog" className={styles.navbarLink}>Blog</Link>
          <Link href="/contact-us" className={styles.navbarLink}>Contact Us</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
