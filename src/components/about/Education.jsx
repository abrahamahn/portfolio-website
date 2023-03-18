import React from "react";

const educationContent = [
  {
    year: "2021 - 2024",
    img: "/img/icon/usc.jpg",
    institute: "UNIVERSITY OF SOUTHERN CALIFORNIA",
    degree: "B.S. Computer Science",
  },
  {
    year: "2011 - 2015",
    img: "/img/icon/usc.jpg",
    institute: "UNIVERSITY OF SOUTHERN CALIFORNIA",
    degree: "B.S. Music Industry",
  },
  {
    year: "2007 - 2011",
    img: "/img/icon/cbury.jpg",
    institute: "Canterbury School",
    degree: "High School",

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
            {val.institute}
            <span className="place open-sans-font">{val.degree}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
