import React from "react";
import ReactTyped from "react-typed";

import HeroData from "../../data/Hero";
import SocialMediaData from "../../data/SocialMedia";

interface HeroProps {
  handlePortfolioClick: () => void;
  handleResumeClick: () => void;
}

const Hero: React.FC<HeroProps> = ({
  handlePortfolioClick,
  handleResumeClick,
}) => {
  return (
    <div className="hero" id="home">
      <div className="content">
        <div className="extra">
          <h5 className="name">{HeroData.name}</h5>
          <h1
            className="title"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200">
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
          <p className="text">{HeroData.description}</p>
          <div className="social">
            <ul>
              {SocialMediaData.map((val, i) => (
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
              <button onClick={handlePortfolioClick}>Portfolio</button>
            </div>
            <div className="resume_button">
              <button onClick={handleResumeClick}>Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;