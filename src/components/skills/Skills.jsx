import React from "react";

const skillsContent = [
  {
    name: "C++",
    skillPercent: "55",
  },
  {
    name: "Javascript",
    skillPercent: "83",
  },
  {
    name: "Python",
    skillPercent: "85",
  },
  {
    name: "Full-Stack",
    skillPercent: "75",
  },
  {
    name: "Web Design",
    skillPercent: "78",
  },
  {
    name: "Digital Marketing",
    skillPercent: "87",
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
