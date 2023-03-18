import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Abraham " },
  { meta: "last name", metaInfo: "Ahn" },
  { meta: "Age", metaInfo: "30" },
  { meta: "Nationality", metaInfo: "United States" },
  { meta: "Remote", metaInfo: "Available" },
  { meta: "In-Office", metaInfo: "Available" },
  { meta: "Address", metaInfo: "San Francisco" },
  { meta: "phone", metaInfo: "+1 (650)254-6342" },
  { meta: "Email", metaInfo: "satmorningrain@gmail.com" },
  { meta: "langages", metaInfo: "English, Korean, Spanish" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
