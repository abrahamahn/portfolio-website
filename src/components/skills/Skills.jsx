import React from "react";

const skillsContent = [
  {
    name: "C++",
    skillPercent: "75",
  },
  {
    name: "Javascript",
    skillPercent: "90",
  },
  {
    name: "Python",
    skillPercent: "95",
  },
  {
    name: "Full-Stack",
    skillPercent: "85",
  },
  {
    name: "Web Design",
    skillPercent: "80",
  },
  {
    name: "Digital Marketing",
    skillPercent: "90",
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
