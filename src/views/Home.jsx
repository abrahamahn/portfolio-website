import React from "react";
import Sidebar from "../components/header/Sidebar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Service from "../components/service/Service";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/Contact";
import Address from "../components/Address";
import Map from "../components/Map";
import HeaderMobile from "../components/header/HeaderMobile";

const Home = ({
  form,
  register,
  setValue,
  errors,
  sendEmail,
}) => {
  return (
    <div className={`home-light edina_tm_mainpart`}>
      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>

      <Sidebar />
      {/* End Header */}

      <Hero />
      {/* End Hero */}

      <About />
      {/* End Hero */}

      <div className="edina_tm_services" id="service">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Services</h3>
          </div>
          {/* End edian_tm_title */}
          <Service />
        </div>
      </div>
      {/* End Services */}

      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Portfolio</h3>
          </div>
          <div className="text">
            <p>Click the photo to view projects in detail.</p>
          </div>
          {/* End edian_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* End Portfolio */}

{/*      <div className="edina_tm_testimonials" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Testimonials</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          {/* End edian_tm_title */}
{/*          <div className="list ">
            <ul>
              <Testimonial />
            </ul>
          </div>
        </div>
      </div>
      {/* End Testimonial */} 
{/*}      <div className="edina_tm_news" id="blog">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          {/* End edian_tm_title */}
{/*          <Blog />
        </div>
      </div>
      {/* End Blog */}

      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  I'm always open to discussing 
                  <br />
                  <span> new projects or partnerships.</span>
                </p>
              </div>
              {/* End title */}
              <div className="fields">
                <Contact
                  form={form}
                  register={register}
                  setValue={setValue}
                  errors={errors}
                  sendEmail={sendEmail}
                />
              </div>
              {/* End Contact Form */}
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>
            {/* End Map */}
          </div>
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default Home;
