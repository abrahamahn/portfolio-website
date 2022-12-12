import React, { useState, useEffect } from "react";
import Home from "./views/Home";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import { useForm } from "react-hook-form";
import * as emailjs from "@emailjs/browser"
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  // CONTACT FORM LOGIC
  const initialList = {
    name: "name",
    email: "email",
    message: "message" };
  const [ contactData, setContactData ] = useState({...initialList});
  const { register, errors, handleSubmit } = useForm({...contactData});
  function handleChange(e) {    
    setContactData({
    ...contactData,
    [e.target.key]: [e.target.value]});
  }
  const onSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2dr1qmv', 
        'template_w5iqp0o', 
        e.target,
        'NfAHr5e8dWDpEmpQJ'
      )
      .then((result) => {
        alert(`Thank you for you message, 
        ${result.name}!`, result.message);
      })
      .catch((error) => {
        alert('It looks like we have hit an error. Could you please try again?');
      })
      setContactData({ ...initialList});
  };
  
  useEffect(() => {
    AOS.init()}, []);
    
  return (
    <div className='App'>
      <AnimatedCursor
        innerSize={16}
        outerSize={28}
        color="200,200,200"
        outerAlpha={0.5}
        innerScale={0.8}
        outerScale={1.4}
      />
      <ScrollToTop />
      <Home 
        register={register}
        errors={errors}
        contactData={contactData}
        setContactData={setContactData}
        handleChange={handleChange}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};