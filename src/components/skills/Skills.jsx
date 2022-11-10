import React from "react";

const skillsContent = [
  {
    name: "Javascript",
    skillPercent: "90",
  },
  {
    name: "Python",
    skillPercent: "67",
  },
  {
    name: "C++",
    skillPercent: "50",
  },
  {
    name: "Digital Marketing",
    skillPercent: "83",
  },
  {
    name: "Full-Stack",
    skillPercent: "66",
  },
  {
    name: "Web Design",
    skillPercent: "73",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
