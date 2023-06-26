import React, { useState, ReactNode } from "react";
import { Transition } from 'react-transition-group';
import AnimatedCursor from "react-animated-cursor";

import Menu from "../components/layer/Menu";

import Hero from "../components/section/Hero";
import About from "../components/section/About";
import Blog from "../components/section/Blog";
import Portfolio from "../components/section/Portfolio";
import Contact from "../components/section/Contact";

type SectionType = () => ReactNode;

const Home: React.FC = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number | null>(0); // Set to 0

  const handlePortfolioClick = () => {
    setActiveSectionIndex(2);
  };

  const handleResumeClick = () => {
    setActiveSectionIndex(4);
  };

  const sections: SectionType[] = [
    () => <Hero handlePortfolioClick={handlePortfolioClick} handleResumeClick={handleResumeClick} />,
    () => <About />,
    () => <Portfolio />,
    () => <Blog />,
    () => <Contact />
  ];

  return (
    <div className="main_container" style={{ height: "100vh", overflow: "hidden" }}>
      <div className="sub_container">
        <AnimatedCursor
          innerSize={16}
          outerSize={28}
          color="200,200,200"
          outerAlpha={0.5}
          innerScale={0.8}
          outerScale={1.4}
        />
        <main>
          <Menu
            activeSectionIndex={activeSectionIndex}
            setActiveSectionIndex={setActiveSectionIndex}
          />
          {sections.map((Section, index) => (
            <Transition in={activeSectionIndex === index} timeout={250} key={index}>
              {(state) => (
                <div className={`transition transition-${state}`}>
                  {activeSectionIndex === index && <Section />}
                </div>
              )}
            </Transition>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;
