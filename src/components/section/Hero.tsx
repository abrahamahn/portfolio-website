import React from "react";
import ReactTyped from "react-typed";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import MediumIcon from "../icons/social/Medium";

interface HeroProps {
  handlePortfolioClick: () => void;
  handleResumeClick: () => void;
}

const heroContent = {
  shapeImage: "profile-picture.svg",
  heroImage: "2",
  name: "Abraham Ahn",
  description: `Specialized in creating the best digital web experiences.`,
};

const SocialShare = [
  {
    iconName: <FiGithub color='#888888'/>,
    link: "https://www.github.com/abrahamahn",
  },
  {
    iconName: <FiLinkedin color='#888888'/>,
    link: "https://www.linkedin.com/in/abrahamahn/",
  },
  {
    iconName: <FiTwitter width="24px" height="24px" color= '#888888' />,
    link: "https://twitter.com/satmorningrain",
  },
  {
    iconName: <MediumIcon width="24px" height="24px" color= '#888888' />,
    link: "https://medium.com/@abrahamahn",
  }
];

const Hero: React.FC<HeroProps> = ({
  handlePortfolioClick,
  handleResumeClick,
}) => {
  return (
    <div className="hero" id="home">
      <div className="content">
        <div className="extra">
          <h5 className="name"
          >
            {heroContent.name}
          </h5>
          <h1
            className="title"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <ReactTyped
                loop
                typeSpeed={125}
                backSpeed={25}
                strings={[
                  "Software Engineer.",
                  "Web Designer.",
                  "Marketing Manager.",
                ]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
        <p className="text">
            {heroContent.description}
          </p>
        <div className="social">
            <ul>
              {SocialShare.map((val, i) => (
                <li key={i}>
                  <a href={val.link} target="_blank" rel="noreferrer">
                    {val.iconName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        <div className="button_container">
          <div className="portfolio_button">
            <button onClick={handlePortfolioClick}>
              Portfolio
            </button>
          </div>
          <div className="resume_button">
            <button onClick={handleResumeClick}>
              Resume
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;