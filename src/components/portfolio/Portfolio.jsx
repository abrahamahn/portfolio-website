import React from "react";
import ReactTooltip from "react-tooltip";
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
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://www.figma.com/file/Db9UegNOZqZ0zO2iHWqtc3/Cashrollie?node-id=0%3A1"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/1.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="product"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>DAW Console</h5>
                      <span>UI Design</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://www.figma.com/file/Db9UegNOZqZ0zO2iHWqtc3/Cashrollie?node-id=0%3A1"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/2.jpg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="dribbble"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Music Player</h5>
                      <span>Design</span>
                    </div>
                  </ReactTooltip>
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
                    src="img/portfolio/3.jpg"
                    data-tip
                    data-for="facebook"
                    alt="portfolio"
                  />
                  <ReactTooltip
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
                  </ReactTooltip>
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
                    src="img/portfolio/4.jpg"
                    data-tip
                    data-for="youtube"
                    alt="portfolio"
                  />
                  <ReactTooltip
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
                  </ReactTooltip>
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
                    src="img/portfolio/5.jpg"
                    data-tip
                    data-for="web"
                    alt="portfolio"
                  />
                  <ReactTooltip
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
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}
        </Slider>
      </ul>
    </div>
  );
};

export default Portfolio;
