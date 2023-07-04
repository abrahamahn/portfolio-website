import React from "react";
import { AboutIcon, PortfolioIcon, BlogIcon, ContactIcon } from '../icons/menu'
interface HomeProps {
  handleAboutClick: () => void;
  handlePortfolioClick: () => void;
  handleBlogClick: () => void;
  handleContactClick: () => void;
}

const Home: React.FC<HomeProps> = ({
  handleAboutClick,
  handlePortfolioClick,
  handleBlogClick,
  handleContactClick,
}) => {
  return (
    <div className="home">
      <div className="about" onClick={handleAboutClick}>
        <p>Creating the best digital web experiences. Creating the best digital web experiences. Creating the best digital web experiences.</p>
        <h1>About</h1>
        <AboutIcon width={24} height={24} color="white"/>
      </div>
      <div className="portfolio" onClick={handlePortfolioClick}>
        <p>View past projects and frameworks used. View past projects and frameworks used. View past projects and frameworks used. </p>
        <h1>Portfolio</h1>
        <PortfolioIcon width={24} height={24} color="white"/>
      </div>
      <div className="blog" onClick={handleBlogClick}>
        <p>View past articles and blogs I wrote. View past articles and blogs I wrote. View past articles and blogs I wrote. View past articles and blogs I wrote.</p>
        <h1>Blog</h1>
        <BlogIcon width={24} height={24} color="white"/>
      </div>
      <div className="contact" onClick={handleContactClick}>
        <p>For resume or new projects, please contact. For resume or new projects, please contact. For resume or new projects, please contact.</p>
        <h1>Contact</h1>
        <ContactIcon width={24} height={24} color="white"/>
      </div>
    </div>
  );
};

export default Home;

