import React, { useState, useEffect } from "react";
import ReactTyped from "react-typed";

import { HeaderData, SocialMediaData } from "../../data";
import { SocialMediaItem } from "../../data/types";

const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div>
      {isMobile && (
        <header className="header">
            <div className="left">
              <h5 className="name">{HeaderData.name}</h5>
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
            </div>
            <div className="right">
              <p className="text">{HeaderData.description}</p>
              <div className="socialmedia">
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
            </div>
        </header>
      )}
    </div>
  );
};

export default Header;

