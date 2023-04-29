import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="edina_tm_portfolio" id="portfolio">
      <div className="container">
        <div className="edina_tm_title">
          <h3>Portfolio</h3>
        </div>
        <div className="text">
          <p>Click the photo to view projects in detail.</p>
        </div>
        <div className="portfolio_inner my_carousel gallery_zoom">
          <ul data-aos="fade-right" data-aos-duration="1200">
            <Slider {...settings}>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <a
                      href="https://blendtune.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="details"
                    >
                      <img
                        src="img/portfolio/1.jpg"
                        alt="portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
              {/* End li */}

              <li>
                <div className="list_inner">
                  <div className="image">
                    <a
                      href="https://cashrollie.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="details"
                    >
                      <img
                        src="img/portfolio/2.jpg"
                        alt="portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
              {/* End li */}

              <li>
                <div className="list_inner">
                  <div className="image">
                    <a
                      href="https://www.youtube.com/c/Cashrollie/videos"
                      target="_blank"
                      rel="noreferrer"
                      className="details"
                    >
                      <img
                        src="img/portfolio/3.jpg"
                        alt="portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
              {/* End li */}

              <li>
                <div className="list_inner">
                  <div className="image">
                    <a
                      href="https://nickhadim.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="details"
                    >
                      <img
                        src="img/portfolio/4.jpg"
                        alt="portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
              {/* End li */}
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
