import React, { useState } from "react";
import Modal from "react-modal";
import Tilt from "react-parallax-tilt";
import ModalFour from "./service/ModalFour";
import ModalOne from "./service/ModalOne";
import ModalThree from "./service/ModalThree";
import ModalTwo from "./service/ModalTwo";

Modal.setAppElement("#root");

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() { setIsOpen(!isOpen); }
  function toggleModalTwo() { setIsOpen2(!isOpen2); }
  function toggleModalThree() { setIsOpen3(!isOpen3); }
  function toggleModalFour() { setIsOpen4(!isOpen4);}

  return (
    <div className="edina_tm_services" id="service">
      <div className="container">
        <div className="edina_tm_title">
          <h3>Services</h3>
        </div>
        <div className="service_list">
          <ul>
            {/* Start Service Motion & Web Graphy */}
            <li data-aos="fade-right" data-aos-duration="1200">
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img className="svg custom" src="img/svg/1.svg" alt="" />
                    <div className="service_title">
                      <h3>Digital Marketing</h3>
                    </div>
                    {/* <div className="learn_more">
                  Learn More<span></span>
                </div>
*/}{" "}
                  </div>
                </div>
              </Tilt>
            </li>
            {/* End Service Motion & Web Graphy */}

            {/* Start Service Ui/Ux Consultancy */}
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
                    {/* <div className="learn_more">
                  Learn More<span></span>
               </div>
*/}{" "}
                  </div>
                </div>{" "}
              </Tilt>
            </li>
            {/* End Service Ui/Ux Consultancy */}

            {/* Start Service Branding & Design */}
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
                    {/* <div className="learn_more">
                  Learn More<span></span>
                </div>
*/}{" "}
                  </div>
                </div>
              </Tilt>
            </li>
            {/* End Service Branding & Design */}

            {/* Start Service Mobile App Design */}
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
                    {/*                <div className="learn_more">
                  Learn More<span></span>
                </div>
*/}{" "}
                  </div>
                </div>
              </Tilt>
            </li>
            {/* End Service Mobile App Design */}
          </ul>

          {/* Start Modal Motion Graphy */}
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModalOne}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="edina_tm_modalbox">
              <button className="close-modal" onClick={toggleModalOne}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap ">
                  <ModalOne />
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Motion Graphy */}

          {/* Start Modal Branding & Design */}
          <Modal
            isOpen={isOpen2}
            onRequestClose={toggleModalTwo}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="edina_tm_modalbox">
              <button className="close-modal" onClick={toggleModalTwo}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap ">
                  <ModalTwo />
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Branding & Design */}

          {/* Start Modal Mobile App Design */}
          <Modal
            isOpen={isOpen3}
            onRequestClose={toggleModalThree}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="edina_tm_modalbox">
              <button className="close-modal" onClick={toggleModalThree}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap ">
                  <ModalThree />
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Mobile App Design*/}

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
            isOpen={isOpen4}
            onRequestClose={toggleModalFour}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="edina_tm_modalbox">
              <button className="close-modal" onClick={toggleModalFour}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap">
                  <ModalFour />
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </div>
      </div>
    </div>
  );
};

export default Service;