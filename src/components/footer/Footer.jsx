import React from "react";
import styles from "./footer.module.css";
import RoundedButton from "../roundedButton/RoundedButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container} >
      <div className={styles.icons}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="img" width={139} height={20} style={{ filter: 'brightness(0) invert(1)' }} />
        </div>
        <div className={styles.socials}>
          <Image src="/icon-facebook.png" alt="img" width={21} height={20} className={styles.socialContent} />
          <Image src="/icon-youtube.png" alt="img" width={21} height={20} className={styles.socialContent}/>
          <Image src="/icon-twitter.png" alt="img" width={21} height={20} className={styles.socialContent}/>
          <Image src="/icon-pinterest.png" alt="img" width={21} height={20} className={styles.socialContent}/>
          <Image src="/icon-instagram.png" alt="img" width={21} height={20} className={styles.socialContent}/>
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.linkOne}>
          <Link href="/" className={styles.linkContent}>About Us</Link>
          <Link href="/" className={styles.linkContent}>Contact</Link>
          <Link href="/" className={styles.linkContent}>Blog</Link>
        </div>
        <div className={styles.linkTwo}>
          <Link href="/" className={styles.linkContent}>Careers</Link>
          <Link href="/" className={styles.linkContent}>Support</Link>
          <Link href="/" className={styles.linkContent}>Privacy Policy</Link>
        </div>
      </div>

      <div className={styles.lastPart}>
        <div className={styles.button}>
          <RoundedButton />
        </div>
        <div className={styles.copyRight}>
          <p>©Eaybank. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
