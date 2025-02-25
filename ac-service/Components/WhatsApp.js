// WhatsAppToggle.js
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "@/styles/WhatsApp.module.css";

const WhatsAppToggle = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`${styles.whatsappButton} ${show ? styles.visible : styles.hidden}`}>
      <Link href="https://wa.me/9810954362" target="_blank" rel="noopener noreferrer">
        <div className={styles.iconWrapper}>
          <FaWhatsapp size={32} />
        </div>
      </Link>
    </div>
  );
};

export default WhatsAppToggle;