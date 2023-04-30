import React from "react";
import Tilt from "react-parallax-tilt";

const Service = () => {
  return (
    <div className="edina_tm_services" id="service">
      <div className="container">
        <div className="edina_tm_title">
          <h3>Services</h3>
        </div>
        <div className="service_list">
          <ul>
            <li data-aos="fade-right" data-aos-duration="1200">
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img className="svg custom" src="img/svg/1.svg" alt="" />
                    <div className="service_title">
                      <h3>Digital Marketing</h3>
                    </div>
                  </div>
                </div>
              </Tilt>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img className="svg custom" src="img/svg/2.svg" alt="" />
                    <div className="service_title">
                      <h3>User Interface Design</h3>
                    </div>
                  </div>
                </div>{" "}
              </Tilt>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img className="svg custom" src="img/svg/3.svg" alt="" />
                    <div className="service_title">
                      <h3>Front-end Dev</h3>
                    </div>
                  </div>
                </div>
              </Tilt>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img className="svg custom" src="img/svg/4.svg" alt="" />
                    <div className="service_title">
                      <h3>Back-end Dev</h3>
                    </div>
                  </div>
                </div>
              </Tilt>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;