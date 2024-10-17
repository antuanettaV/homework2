import styles from "./OurValues.module.css";

const OurValues = () => {
  return (
    <div className={styles.ourValues}>
      <h1 className={styles.mainTitle}>OUR VALUES</h1>
      <p className={styles.subTitle}>Rules to Live By</p>
      <div className={styles.valuesContainer}>
        <div className={styles.valueCard}>
          <p className={styles.number}>01</p>
          <h3 className={styles.craftTitle}>Love your craft.</h3>
          <p className={styles.craftDescription}>
            We're here because we love what we do. It's our passion, hobby,
            career, and vocation. We're looking for others who feel the same
            way.
          </p>
        </div>
        <div className={styles.valueCard}>
          <p className={styles.number}>02</p>
          <h3 className={styles.valueTitle}>Be Bold. Be humble.</h3>
          <p className={styles.craftDescription}>
            There is no top-down. We lead from the bottom and the edges.
            Everyone drives. We celebrate ideas over egos, where the best idea
            wins, regardless of who or where it comes from.
          </p>
        </div>
        <div className={styles.valueCard}>
          <p className={styles.number}>03</p>
          <h3 className={styles.valueTitle}>Be Better.</h3>
          <p className={styles.craftDescription}>
            Always push forward. We're on a tireless pursuit to become better
            and expect those around us to do the same.
          </p>
        </div>
        <div className={styles.valueCard}>
          <p className={styles.number}>04</p>
          <h3 className={styles.valueTitle}>Be a Professional.</h3>
          <p className={styles.craftDescription}>
            There's important work to be done. Speak up. Be present. Provide
            value, with honesty and candor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
