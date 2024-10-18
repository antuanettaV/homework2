import styles from "./OurCrew.module.css";

const OurCrew = () => {
  const teamMembers = [
    {
      name: "Sarah Vega",
      title: "Captain",
      description: "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
      image: "/crew/image-anousheh-ansari.png",
    },
    {
      name: "Dr. Leo Redding",
      title: "Our chief astrophysicist",
      description: "Dr. Redding is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
      image: "/crew/image-douglas-hurley.png",
    },
    {
      name: "Alex Santos",
      title: "Mission Specialist",
      description: "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
      image: "/crew/image-mark-shuttleworth.png",
    },
    {
      name: "Victor Glover",
      title: "Chief Engineer",
      description: "With his extensive background in aerospace engineering, Victor is responsible for the state-of-the-art technology that powers our spacecraft. His innovation ensures that our travelers are always in safe hands.",
      image: "/crew/image-victor-glover.png",
    },
  ];

  return (
    <div className={styles.ourTeam}>
      <h1 className={styles.mainTitle}>Our Team</h1>
      <p>WHO WE ARE</p>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.
      </p>
      <div className={styles.teamMembers}>
        {teamMembers.map((member, index) => (
          <div className={styles.teamMember} key={index}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.teamImage}
            />
            <p className={styles.name}>{member.name}</p>
            <p className={styles.jobTitle}>{member.title}</p>
            <p className={styles.description}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCrew;
