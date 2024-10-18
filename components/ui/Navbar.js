"use client";
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavItem from './NavItem'; 

import styles from './Navbar.module.css';

const navbarItems = [
  {
    title: 'ABOUT US',
    link: '/about_us',
  },
  {
    title: 'DESTINATION',
    link: '/destination',
  },
  {
    title: 'NASA COLLABORATION',
    link: '/nasa_collaboration',
  }
];

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <Link href="/"><img src="/shared/logo.svg" alt="GALACTICA Logo" /> GALACTICA</Link>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}></ul>
        <ul className={styles.navbarList}>
          {/* TASK - React 1 week 2 */}
          {/* Create a <NavItem> component, which accepts the following:  */}
          {/* title, link, isActive  */}
          {navbarItems.map((item, index) => (
            <NavItem 
              key={index} 
              title={item.title} 
              link={item.link} 
              isActive={item.link === currentPath} 
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};