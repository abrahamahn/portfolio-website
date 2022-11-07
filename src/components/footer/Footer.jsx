import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="copy">
          <p>
            &copy; {new Date().getFullYear()} by{" "}
            <a
              href="https://abrahamahn.com/"
              target="_blank"
              rel="noreferrer"
            >
              Abraham J. Ahn
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
