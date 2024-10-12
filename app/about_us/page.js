import styles from './page.module.css'; 

// OurValues 
const OurValues = () => {
  return (
    <div className="our-values">
      <h1 className="main-title">OUR VALUES</h1>
      <p className="sub-title">Rules to Live By</p>
      <p className="number">01</p>
      <h1 className="craft-title">Love your craft.</h1>
      <p className="craft-description">
        We're here because we love what we do. It's our passion, hobby, career, and vocation. We're looking for others who feel the same way.
      </p>
      <p className="number">02</p>
      <h3 className="value-title">Be Bold. Be humble. There is no top-down. We lead from the bottom and the edges. Everyone drives. We celebrate ideas over egos, where the best idea wins, regardless of who or where it comes from.</h3>
      <p className="number">03</p>
      <h3 className="value-title">Be Better. Always push forward. We're on a tireless pursuit to become better and expect those around us to do the same.</h3>
      <p className="number">04</p>
      <h3 className="value-title">Be a Professional. There's important work to be done. Speak up. Be present. Provide value, with honesty and candor.</h3>
    </div>
  );
};

// OurCrew 
const OurCrew = () => {
  const teamMembers = [
    {
      name: "Anousheh Ansari",
      title: "Founder + CEO",
      image: "anousheh-ansari.png",
    },
    {
      name: "Douglas Hurley",
      title: "Partner + Chief Creative Officer",
      image: "douglas-hurley.png",
    },
    {
      name: "Mark Shuttleworth",
      title: "CTO",
      image: "mark-shuttleworth.png",
    },
    {
      name: "Victor Glover",
      title: "VP, Strategy",
      image: "victor-glover.png",
    },
  ];

  return (
    <div className="our-team">
      <h1 className="main-title">Our Team</h1>
      <p>WHO we are</p>
      <p>
        We are a curated team of international experts united by a single goal:
        to create category-defining brands and digital experiences that make an
        impact, shape culture, and connect people.
      </p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <p className="name">{member.name}</p>
            <p className="job-title">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// OurPartners 
const OurPartners = () => {
  return (
    <div className="our-partners">
      <h1 className="main-title">We collaborate with progressive, ambitious brands we believe in.</h1>
      <div className="brand-names">
        <p className="brand-name">AMAZON</p>
        <p className="brand-name">Alphabet</p>
        <p className="brand-name">NYU</p>
        <p className="brand-name">CBC</p>
        <p className="brand-name">Queen's</p>
        <p className="brand-name">Samsung</p>
      </div>
    </div>
  );
};

// Crew 
export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew />
        </section>
        <section className="card">
          <h2>Our Partners</h2>
          <OurPartners /> 
        </section>
      </main>
    </div>
  );
};

export default Crew;
