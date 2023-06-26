import React, { useState, useEffect } from "react";
import { useSwipeable } from 'react-swipeable';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface PortfolioItem {
  link: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  postedDate: string;
  categories: string[];
  stacks: string[];
}

const portfolios: PortfolioItem[] = [
  {
    link: "https://abrahamahn.com/",
    image: "assets/portfolio/portfolio-website.jpg",
    alt: "Portfolio Website",
    title: "Full-Stack Development",
    postedDate: "2023-06-26",
    description:
      "Personal portfolio website for myself, showcasing portfolios, Medium blog posts, social media links, and contact forms with my brief information.",
    categories: ["Web Dev", "Frontend", "UX"],
    stacks: ["React JS", "Typescript", "SCSS", "Javascript", "Tailwind CSS"]
  },
  {
    link: "https://auto-connect.netlify.app/",
    image: "assets/portfolio/auto-connect.jpg",
    alt: "Auto Connect",
    title: "Front-end Development",
    postedDate: "2023-05-24",
    description:
      "Auto Connect is a mobile-first web application that presents a carousel view of used cars for sale, allowing users to browse and filter through various categories.",
    categories: ["Web Dev", "UX", "Frontend"],
    stacks: ["React JS", "Typescript", "CSS", "Javascript"]
  },
  {
    link: "https://transaction-approvals.netlify.app/",
    image: "assets/portfolio/transaction-approval.jpg",
    alt: "Transaction Approvals",
    title: "Full-Stack Development",
    postedDate: "2023-05-08",
    description:
      "Transaction Approval is a mobile-first web application prototype designed to facilitate the approval process for transactions within internal teams of companies. It offers a range of filter options and includes buttons for approving or disapproving transactions.",
    categories: ["Web Dev", "UX", "Frontend"],
    stacks: ["React JS", "Typescript", "CSS", "Javascript"]
  },
  {
    link: "https://blendtune.com/",
    image: "assets/portfolio/blendtune.jpg",
    alt: "Cashrollie",
    title: "Full-stack Development",
    postedDate: "2023-03-14",
    description:
      "Blendtune Music Player is an online music store that provides a diverse catalog of music instrumentals for artists to browse, purchase, and download. Additionally, it features a mini player that allows users to preview the catalogs before making a selection.",
    categories: ["Web Dev", "Frontend"],
    stacks: ["Next JS", "Typescript", "SCSS", "Javascript", "Tailwind CSS"]
  },
  {
    link: "https://cashrollie.com/",
    image: "assets/portfolio/cashrollie.jpg",
    alt: "Cashrollie",
    title: "Business Development",
    postedDate: "2017-06-15",
    description:
      "Cashrollie is a comprehensive music production and publishing company catering to commercial music artists and content creators. As the person in charge, I handle various aspects of the company, including design, marketing, operations, and business campaigns. My responsibilities encompass a wide range of tasks to ensure the success and growth of Cashrollie in the music industry.",
    categories: ["Web Dev", "Frontend", "UX"],
    stacks: ["CSS", "Javascript", "HTML", "Wordpress"]
  },
  {
    link: "https://nickhadim.com/",
    image: "assets/portfolio/nickhadim.jpg",
    alt: "Nick Hadim",
    title: "Front End Design",
    postedDate: "2016-06-15",
    description:
      "Nick Hadim is a prominent commercial real estate company based in Los Angeles, California. In my role, I assumed responsibility for the UI/UX design of the company's website, ensuring an optimal user experience. Additionally, I actively maintained and updated the listings of commercial properties available for rentals and sales, ensuring that the website consistently provided accurate and up-to-date information to clients and potential investors.",
    categories: ["Web Dev", "Frontend", "UX"],
    stacks: ["CSS", "Javascript", "HTML"]
  },
];

const Portfolio: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = window.innerWidth < 768 ? 3 : 6;
  const totalPages = Math.ceil(portfolios.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  

  const handleCarouselClick = (link: string) => {
    window.open(link, "_blank");
  }

  /* Page Change Handlers */
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
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (event.key === "ArrowRight" && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]);

  return (
    <div 
      {...handlers} // adding swipe and drag handlers to the portfolio container
      className="portfolio_container" 
      id="portfolio" 
    >
      <div className="title_container">
        <h2 className="title">Portfolio</h2>
      </div>
      <div className="portfolio">
        {/* Left pointer icon */}
          <FaAngleLeft
            className="page-change-icon left"
            onClick={() => handlePageChange(-1)}
          />
        <div className="carousel_container">
          {portfolios
            .sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
            .slice(startIndex, endIndex)
            .map((portfolio, index) => (
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