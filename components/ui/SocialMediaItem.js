"use client"; 

import Link from 'next/link';
import styles from './SocialMediaItem.module.css';

const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li className={styles.socialMediaItem}>
      <Link href={url} title={title} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={title} className={styles.icon} />
      </Link>
    </li>
  );
};

export default SocialMediaItem;
