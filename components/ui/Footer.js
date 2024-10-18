"use client"; 

import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import Link from 'next/link';
import SocialMediaItem from './SocialMediaItem';

const Footer = () => {
  const path = usePathname().split('?')[0];
  console.log("Current path:", path);
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      {/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */}
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}

      
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem url="https://facebook.com" title="Facebook" icon="/social_media/facebook.png" />
          <SocialMediaItem url="https://instagram.com" title="Instagram" icon="/social_media/instagram.jfif" />
          <SocialMediaItem url="https://tiktok.com" title="Tiktok" icon="/social_media/tiktok.png" />
          <SocialMediaItem url="https://linkedin.com" title="LinkedIn" icon="/social_media/Linkedin.png" />
          <SocialMediaItem url="https://google.com" title="On the streets at night" icon="/social_media/google.png" />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;