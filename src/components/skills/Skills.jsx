import React from "react";

const skillsContent = [
  {
    name: "Javascript",
    skillPercent: "58",
  },
  {
    name: "Python",
    skillPercent: "55",
  },
  {
    name: "C++",
    skillPercent: "30",
  },
  {
    name: "Marketing",
    skillPercent: "78",
  },
  {
    name: "Full-Stack",
    skillPercent: "48",
  },
  {
    name: "Web Design",
    skillPercent: "50",
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
