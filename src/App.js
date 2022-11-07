import React, { useEffect } from "react";
import EdinaRegular from "./views/all-home-version/EdinaRegular";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import AnimatedCursor from "react-animated-cursor";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={16}
        outerSize={28}
        color="200,200,200"
        outerAlpha={0.5}
        innerScale={0.8}
        outerScale={1.4}
      />
      <ScrollToTop />
      <EdinaRegular />
    </>
  );
};

export default App;
