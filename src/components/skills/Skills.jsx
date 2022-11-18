import React from "react";

const skillsContent = [
  {
    name: "Javascript",
    skillPercent: "63",
  },
  {
    name: "Python",
    skillPercent: "60",
  },
  {
    name: "C++",
    skillPercent: "35",
  },
  {
    name: "Marketing",
    skillPercent: "83",
  },
  {
    name: "Full-Stack",
    skillPercent: "53",
  },
  {
    name: "Web Design",
    skillPercent: "55",
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
