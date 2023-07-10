import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import AnimatedCursor from 'react-animated-cursor';

import Header from './components/navigation/Header';
import Menu from './components/navigation/Menu';

import Home from './components/section/Home';
import HomeDesktop from './components/section/HomeDesktop';
import About from './components/section/About';
import Blog from './components/section/Blog';
import Portfolio from './components/section/Portfolio';
import Contact from './components/section/Contact';
import Div100vh from 'react-div-100vh';
import { setActiveSection, RootState, AppDispatch } from './store/store';

type SectionType = () => ReactNode;

const App: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768;

  const dispatch: AppDispatch = useDispatch();
  const activeSectionIndex = useSelector((state: RootState) => state.app.activeSectionIndex);

  const handleAboutClick = () => {
    dispatch(setActiveSection(1));
  };

  const handlePortfolioClick = () => {
    dispatch(setActiveSection(2));
  };

  const handleBlogClick = () => {
    dispatch(setActiveSection(3));
  };

  const handleContactClick = () => {
    dispatch(setActiveSection(4));
  };

  const sections: SectionType[] = [
    () =>
      isMobile ? (
        <Home
          handleAboutClick={handleAboutClick}
          handlePortfolioClick={handlePortfolioClick}
          handleBlogClick={handleBlogClick}
          handleContactClick={handleContactClick}
        />
      ) : (
        <HomeDesktop
          handlePortfolioClick={handlePortfolioClick}
          handleContactClick={handleContactClick}
        />
      ),
    () => <About />,
    () => <Portfolio />,
    () => <Blog />,
    () => <Contact />,
  ];

  const setActiveSectionIndex = (index: number | null): void => {
    dispatch(setActiveSection(index));
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Update initial window width

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
        <div className="main_container">
          <div className="sub_container">
            <Header />
            <main className="viewpoint">
              <AnimatedCursor
                innerSize={16}
                outerSize={28}
                color="200,200,200"
                outerAlpha={0.5}
                innerScale={0.8}
                outerScale={1.4}
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
          <Menu
            activeSectionIndex={activeSectionIndex}
            setActiveSectionIndex={setActiveSectionIndex}
          />
        </div>
    </div>
  );
};

export default App;
