import React from "react";
import ReactTyped from "react-typed";

import { HeaderData, SocialMediaData } from "../../data";
import { SocialMediaItem } from '../../data/types'

interface HomeProps {
  handleAboutClick: () => void;
  handlePortfolioClick: () => void;
  handleBlogClick: () => void;
  handleContactClick: () => void;
}

const HomeDesktop: React.FC<HomeProps> = ({
  handlePortfolioClick,
  handleContactClick,
}) => {
  return (
    <div className="home" id="home">
      <div className="content">
        <div className="extra">
          <h5 className="name">{HeaderData.name}</h5>
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
          <p className="text">{HeaderData.description}</p>
          <div className="social">
            <ul>
              {SocialMediaData.map((val: SocialMediaItem, i: number) => (
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
              <button onClick={handleContactClick}>Resume</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomeDesktop;