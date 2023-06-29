import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import AnimatedCursor from 'react-animated-cursor';

import Menu from '../components/navigation/Menu';
import ScrollToTopOnMount from '../components/navigation/ScrollToTopOnMount';
import HideBottomMenuBarOnScroll from '../components/navigation/HideBottomMenuBarOnScroll';

import Hero from '../components/section/Hero';
import About from '../components/section/About';
import Blog from '../components/section/Blog';
import Portfolio from '../components/section/Portfolio';
import Contact from '../components/section/Contact';
import { setActiveSection, RootState, AppDispatch } from '../store/store';

type SectionType = () => ReactNode;

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const activeSectionIndex = useSelector((state: RootState) => state.app.activeSectionIndex);

  const handlePortfolioClick = () => {
    dispatch(setActiveSection(2));
  };

  const handleResumeClick = () => {
    dispatch(setActiveSection(4));
  };

  const sections: SectionType[] = [
    () => <Hero handlePortfolioClick={handlePortfolioClick} handleResumeClick={handleResumeClick} />,
    () => <About />,
    () => <Portfolio />,
    () => <Blog />,
    () => <Contact />,
  ];

  const setActiveSectionIndex = (index: number | null): void => {
    dispatch(setActiveSection(index));
  };

  return (
    <div className="main_container" style={{ height: '100vh', overflow: 'hidden' }}>
      <ScrollToTopOnMount />
      <HideBottomMenuBarOnScroll />
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
