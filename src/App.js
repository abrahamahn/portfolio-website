import React, { useState, useEffect } from "react";
import Home from "./views/Home";
import emailjs from '@emailjs/browser'
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import AnimatedCursor from "react-animated-cursor";
import "aos/dist/aos.css";

const App = () => {
  const [sender, setSender] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onChange = (e) => {
    setSender({ ...sender, [e.target.key]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_2dr1qmv', 
      'template_lk0paok', 
      e.target, 
      'YOUR_PUBLIC_KEY'
      )
      .then((result) => {
        console.log('Thanks for reaching out. I will return to you shortly.', result.message, result.status, result.text);
      })
      .catch((error) => {
        console.log('It looks like we have hit an error. Could you please try again?', error.message, error.status, error.text);
      });
  };

  useEffect(() => {
    AOS.init();
  }, []);

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
        sender={sender}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default App;
