import React from "react";
import Sidebar from "../components/header/Sidebar";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import HeaderMobile from "../components/header/HeaderMobile";

const Home = ({
  form,
  register,
  setValue,
  errors,
  sendEmail,
  contactSectionRef,
  handleResumeClick,
}) => {
  return (
    <div className="main_container">
      <header className="mobile_header">
        <div className="mobile_header_inner">
          <HeaderMobile />
        </div>
      </header>
      <Sidebar />
      <Hero handleResumeClick={handleResumeClick} />
      <About handleResumeClick={handleResumeClick} />
      <Service />
      <Portfolio />
      <Contact
        form={form}
        register={register}
        setValue={setValue}
        errors={errors}
        sendEmail={sendEmail}
        contactSectionRef={contactSectionRef}
      />
    </div>
  );
};

export default Home;