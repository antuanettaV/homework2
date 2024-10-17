import styles from "./OurCrew.module.css";

const OurCrew = () => {
  const teamMembers = [
    {
      name: "Anousheh Ansari",
      title: "Founder + CEO",
      image: "/crew/image-anousheh-ansari.png",
    },
    {
      name: "Douglas Hurley",
      title: "Partner + Chief Creative Officer",
      image: "/crew/image-douglas-hurley.png",
    },
    {
      name: "Mark Shuttleworth",
      title: "CTO",
      image: "/crew/image-mark-shuttleworth.png",
    },
    {
      name: "Victor Glover",
      title: "VP, Strategy",
      image: "/crew/image-victor-glover.png",
    },
  ];

  return (
    <div className={styles.ourTeam}>
      <h1 className={styles.mainTitle}>Our Team</h1>
      <p>WHO WE ARE</p>
      <p>
        We are a curated team of international experts united by a single goal:
        to create category-defining brands and digital experiences that make an
        impact, shape culture, and connect people.
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCrew;
