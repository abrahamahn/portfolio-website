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
    <div className={`home-light edina_tm_mainpart`}>
      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MK7EC996CC"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MK7EC996CC');
        </script>
      <Sidebar />
      <Hero 
        handleResumeClick={handleResumeClick}
      />
      <About 
        handleResumeClick={handleResumeClick}
      />
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
