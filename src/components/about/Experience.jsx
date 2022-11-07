import React from "react";

const experienceContent = [
  {
    year: "Oct 2017 - Jun 2020",
    img: "/img/icon/cashrollie.jpg",
    position: " Founder/Owner",
    compnayName: "Cashrollie",
    details: `  Music production and publishing company for artists and content creators.`,
  },
  {
    year: "Mar 2017 - Oct 2017",
    img: "/img/icon/nick.jpg",
    position: " Operation Manager",
    compnayName: "Nick Hadim Group of Companies",
    details: `Commercial real estate property management company based in Los Angeles.`,
  },
  {
    year: "Jul 2013 - Dec 2013",
    img: "/img/icon/axs.jpg",
    position: "Product & Marketing Intern",
    compnayName: "AXS.com",
    details: `Online ticketing service platform owned by Anschutz Entertainment Group (AEG).`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src={val.img} alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
