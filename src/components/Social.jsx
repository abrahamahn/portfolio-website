import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiGithub />,
    link: "https://www.github.com/abrahamahn",
  },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/abrahamahn/",
  },
  {
    iconName: <FiFacebook />,
    link: "https://www.facebook.com/meekahxabe",
  },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/meekahstars",
  }
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
