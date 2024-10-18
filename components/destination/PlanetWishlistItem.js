"use client";

import styles from '@/components/destination/destination.module.css';

const PlanetWishlistItem = ({ name, onRemove, thumbnail }) => {
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt={name} />
      <b>{name.toUpperCase()}</b>
      <button onClick={onRemove}>REMOVE</button>
    </div>
  );
};

export default PlanetWishlistItem;
