import React from "react";
import EdinaRegular from "../views/all-home-version/EdinaRegular";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import EdinaRtl from "../views/all-home-version/EdinaRtl";
import Preview from "../views/Preview";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/regular" element={<EdinaRegular />} />
        <Route path="/rtl" element={<EdinaRtl />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
