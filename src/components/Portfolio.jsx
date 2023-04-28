import React from "react";
import { Tooltip } from "react-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  var settings = {
    dots: true,
    arrow: true,
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
          arrow: false,
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
                        data-tip
                        data-for="dribbble"
                        alt="portfolio"
                      />
                      <Tooltip
                        id="1"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Music Player</h5>
                          <span>Design</span>
                        </div>
                      </Tooltip>
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
                        data-tip
                        data-for="facebook"
                        alt="portfolio"
                      />
                      <Tooltip
                        id="facebook"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Cahsorllie</h5>
                          <span>Product</span>
                        </div>
                      </Tooltip>
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
                        data-tip
                        data-for="youtube"
                        alt="portfolio"
                      />
                      <Tooltip
                        id="youtube"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Cashrollie</h5>
                          <span>Content Marketing</span>
                        </div>
                      </Tooltip>
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
                        data-tip
                        data-for="web"
                        alt="portfolio"
                      />
                      <Tooltip
                        id="web"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Nick Hadim</h5>
                          <span>Web Development</span>
                        </div>
                      </Tooltip>
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
