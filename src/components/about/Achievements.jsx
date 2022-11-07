import React from "react";

const achievementsContent = [
  { title: "05", subTitle1: "Years of", subTitle2: "Experience" },
  { title: "5", subTitle1: "Programming", subTitle2: "Languages" },
  { title: "70", subTitle1: "Personal", subTitle2: "Projects" },
  { title: "184", subTitle1: "Completed", subTitle2: "Projects" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
