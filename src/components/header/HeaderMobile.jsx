import React from "react";
import { Link } from "react-router-dom";
// logo name
const dark = "dark";
const light = "light";

const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img className="logo_dark" src={`img/logo/${light}.png`} alt="brand" />
          <img
            className="logo_light"
            src={`img/logo/${dark}.png`}
            alt="brand"
          />
        </Link>
      </div>
      {/* End .logo */}
    </>
  );
};

export default HeaderMobile;
