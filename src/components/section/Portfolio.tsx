import React, { useState, useEffect } from "react";
import { useSwipeable } from 'react-swipeable';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import PortfolioData from '../../data/Portfolio';

interface PortfolioItem {
  postedDate: string;
  link: string;
  image: string;
  alt: string;
  title: string;
  categories: string[];
  stacks: string[];
  description: string;
}

const Portfolio: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageSize: number = window.innerWidth < 768 ? 3 : 6;
  const totalPages: number = Math.ceil(PortfolioData.length / pageSize);
  const startIndex: number = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  

  const handleCarouselClick = (link: string) => {
    window.open(link, "_blank");
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handlePageChange(1),  // next page
    onSwipedRight: () => handlePageChange(-1), // previous page
    trackMouse: true // track mouse event as well
  });

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handlePageChange = (change: number) => {
    if (change === 1 && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (change === -1 && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "ArrowLeft" && currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      } else if (event.key === "ArrowRight" && currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
  };

  useEffect(() => {
    const handle = (event: globalThis.KeyboardEvent) => handleKeyDown(event);
    window.addEventListener("keydown", handle);

    return () => {
      window.removeEventListener("keydown", handle);
    };
  }, [currentPage]);


  return (
    <div 
      {...handlers}
      className="portfolio_container" 
      id="portfolio" 
    >
      <div className="title_container">
        <h2 className="title">Portfolio</h2>
      </div>
      <div className="portfolio">
        <FaAngleLeft
          className="page-change-icon left"
          onClick={() => handlePageChange(-1)}
        />
        <div className="carousel_container">
          {(PortfolioData as PortfolioItem[])
            .sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
            .slice(startIndex, endIndex)
            .map((portfolio: PortfolioItem, index: number) => (
              <div 
                key={index} 
                className="carousel" 
                onClick={() => handleCarouselClick(portfolio.link)}  
              >
                <div className="image_container">
                  <a
                    href={portfolio.link}
                    target="_blank"
                    rel="noreferrer"
                    className="details"
                  >
                    <img
                      className="image"
                      src={portfolio.image}
                      alt={portfolio.alt}
                    />
                  </a>
                </div>
                <div className="info_container">
                  <div className="info_top">
                    <div className="info_top_inner">
                      <h3 className="title">{portfolio.title}</h3>
                      <p className="date">
                        {new Date(portfolio.postedDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })} 
                      </p>
                      {portfolio.link && (
                        <p className="domain">
                          <a href={portfolio.link} target="_blank" rel="noreferrer" className="link">
                            {new URL(portfolio.link).hostname}
                          </a>
                        </p>
                      )}
                      <div className="category">
                        {portfolio.categories.map((category, index) => (
                          <span key={index} className={`category ${category}`}>
                            {category}
                          </span>
                        ))}
                      </div>
                      <div className="stack">
                        {portfolio.stacks.map((stack, index) => (
                          <span key={index} className={`stack ${stack}`}>
                            {stack}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="description">{portfolio.description}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Right pointer icon */}
        <FaAngleRight
          className="page-change-icon right"
          onClick={() => handlePageChange(1)}
        />
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`dot ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageClick(index + 1)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
