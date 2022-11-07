import React from "react";

const educationContent = [
  {
    year: "2020 - 2024",
    img: "/img/icon/usc.jpg",
    degree: "B.S. Computer Science",
    institute: "UNIVERSITY OF SOUTHERN CALIFORNIA & FULLERTON COLLEGE",
    details: `A part-time, limited status student in preparation for a Master's in Computer Science.`,
  },
  {
    year: "2011 - 2015",
    img: "/img/icon/usc.jpg",
    degree: "B.S. Music Industry (Business)",
    institute: "UNIVERSITY OF SOUTHERN CALIFORNIA",
    details: `Study of American music and entertainment industry and foundational business management`,
  },
  {
    year: "2007 - 2011",
    img: "/img/icon/cbury.jpg",
    degree: "High School Diploma",
    institute: "Canterbury School",
    details: `College Prep School | Accepted: USC, UC Berkeley, NYU, U Michigan, Babson College`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src={val.img} alt="icon" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
