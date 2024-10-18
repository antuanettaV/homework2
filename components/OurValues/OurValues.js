import styles from "./OurValues.module.css";

const OurValues = () => {
  return (
    <div className={styles.ourValues}>
      <h1 className={styles.mainTitle}>OUR VALUES</h1>
      <p className={styles.subTitle}>Rules to Live By</p>
      <div className={styles.valuesContainer}>
        <div className={styles.valueCard}>
          <p className={styles.number}>01</p>
          <h3 className={styles.craftTitle}>Exploration</h3>
          <p className={styles.craftDescription}>
          We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.
          </p>
        </div>
        <div className={styles.valueCard}>
          <p className={styles.number}>02</p>
          <h3 className={styles.valueTitle}>Innovation</h3>
          <p className={styles.craftDescription}>
          At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.
          </p>
        </div>
        <div className={styles.valueCard}>
          <p className={styles.number}>03</p>
          <h3 className={styles.valueTitle}>Sustainability</h3>
          <p className={styles.craftDescription}>
          We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.
          </p>
        </div>
        <div className={styles.valueCard}>
          <p className={styles.number}>04</p>
          <h3 className={styles.valueTitle}>Community</h3>
          <p className={styles.craftDescription}>
          We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
