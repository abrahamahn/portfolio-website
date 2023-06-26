import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 1079;

  return (
    <div>
      {isMobile && (
        <div className="mobile_header">
          <div className="logo">
            <img
              src={`assets/sidebar/logo.png`}
              alt="brand"
              className="image"
            >
            </img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
