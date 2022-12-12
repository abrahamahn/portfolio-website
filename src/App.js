import React, { useState, useEffect } from "react";
import Home from "./views/Home";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import { useForm } from "react-hook-form";
import * as emailjs from "@emailjs/browser"
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const { register, setValue, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }});

  const onSubmit = (data) => {
    console.log(data);
    data.preventDefault();

    emailjs
      .sendForm(
        'service_2dr1qmv', 
        'template_w5iqp0o', 
        data.target,
        'NfAHr5e8dWDpEmpQJ'
      )
      .then((result) => {
        alert(`Thank you for you message, 
        ${result.name}!`, result.message);
      })
      .catch((error) => {
        alert('It looks like we have hit an error. Could you please try again?', error.message);
      })
      setValue({ ...useForm.defaultValues});
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
        setValue={setValue}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};