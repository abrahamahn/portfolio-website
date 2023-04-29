import React, { useRef } from "react";
import Home from "./pages/Home";
import AnimatedCursor from "react-animated-cursor";
import { useForm } from "react-hook-form";
import * as emailjs from "@emailjs/browser";

export default function App() {
  const form = useRef();
  const contactSectionRef = useRef(null);
  const { register, setValue, formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2dr1qmv',
      'template_w5iqp0o',
      form.current,
      'NfAHr5e8dWDpEmpQJ'
    ).then(
      (result) => {
        alert(`Thank you for your message! I will return to you shortly via the email address you provided. Best, Abe`, result.message);
      },
      (error) => {
        alert('It looks like we have hit an error. Could you please try again?', error.message);
      }
    );

    setValue({ ...useForm.defaultValues });
  };

  const handleResumeClick = () => {
    contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <AnimatedCursor
        innerSize={16}
        outerSize={28}
        color="200,200,200"
        outerAlpha={0.5}
        innerScale={0.8}
        outerScale={1.4}
      />
      <Home 
        form={form}
        register={register}
        setValue={setValue}
        errors={errors}
        sendEmail={sendEmail}
        handleResumeClick={handleResumeClick}
        contactSectionRef={contactSectionRef}
      />
    </div>
  );
};