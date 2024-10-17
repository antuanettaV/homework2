import styles from "./OurPartners.module.css"; // Ensure you're importing the CSS module

const OurPartners = () => {
  return (
    <div className={styles.ourPartners}>
      {" "}
      {/* Use styles.ourPartners */}
      <h1 className={styles.mainTitle}>
        We collaborate with progressive, ambitious brands we believe in.
      </h1>{" "}
      {/* Use styles.mainTitle */}
      <div className={styles.brandNames}>
        {" "}
        {/* Use styles.brandNames */}
        <div className={styles.brandCard}>
          <img
            src="/business_partners/amazon_logo.png"
            alt="Amazon"
            className={styles.brandImage}
          />
          <p className={styles.brandName}>AMAZON</p>
        </div>
        <div className={styles.brandCard}>
          <img
            src="/business_partners/alphabet-logo.png"
            alt="Alphabet"
            className={styles.brandImage}
          />
          <p className={styles.brandName}>Alphabet</p>
        </div>
        <div className={styles.brandCard}>
          <img
            src="/business_partners/nyu-logo.png"
            alt="NYU"
            className={styles.brandImage}
          />
          <p className={styles.brandName}>NYU</p>
        </div>
        <div className={styles.brandCard}>
          <img
            src="/business_partners/CBC_Logo_White.png"
            alt="CBC"
            className={styles.brandImage}
          />
          <p className={styles.brandName}>CBC</p>
        </div>
        <div className={styles.brandCard}>
          <img
            src="/business_partners/QueensLogo_white.png"
            alt="Queen's"
            className={styles.brandImage}
          />
          <p className={styles.brandName}>Queen's</p>
        </div>
        <div className={styles.brandCard}>
          <img
            src="/business_partners/samsung-logo.png"
            alt="Samsung"
            className={styles.brandImage}
          />
          <p className={styles.brandName}>Samsung</p>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;

