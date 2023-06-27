import React, { useState, useEffect } from "react";
import { useSwipeable } from 'react-swipeable';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import BlogData from '../../data/Blog';

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = window.innerWidth < 768 ? 3 : 6;
  const totalPages = Math.ceil(BlogData.length / pageSize);
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
      {...handlers} // adding swipe and drag handlers to the blog container
      className="blog_container" 
      id="blog" 
    >
      <div className="title_container">
        <h2 className="title">Blog</h2>
      </div>
      <div className="blog">
        {/* Left pointer icon */}
          <FaAngleLeft
            className="page-change-icon left"
            onClick={() => handlePageChange(-1)}
          />
        <div className="carousel_container">
          {BlogData
            .sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
            .slice(startIndex, endIndex)
            .map((blog, index) => (
              <div 
                key={index} 
                className="carousel" 
                onClick={() => handleCarouselClick(blog.link)}  
              >
                <div className="image_container">
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="details"
                  >
                    <img
                      className="image"
                      src={blog.image}
                      alt={blog.alt}
                    />
                  </a>
                </div>
                <div className="info_container">
                  <div className="info_top">
                    <div className="info_top_inner">
                      <h3 className="title">{blog.title}</h3>
                      <p className="date">
                        {new Date(blog.postedDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })} 
                      </p>
                      {blog.link && (
                        <p className="domain">
                          <a href={blog.link} target="_blank" rel="noreferrer" className="link">
                            {new URL(blog.link).hostname}
                          </a>
                        </p>
                      )}
                      <div className="category">
                        {blog.categories.map((category, index) => (
                          <span key={index} className={`category ${category}`}>
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="description">{blog.description}</p>
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

export default Blog;