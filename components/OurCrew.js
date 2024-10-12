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
  
  export default OurCrew;

  