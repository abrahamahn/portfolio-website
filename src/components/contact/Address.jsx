import React from "react";

const Address = () => {
  return (
    <ul className="wrapper">
      <li data-aos="fade-right" data-aos-duration="1200">
        <div className="list_inner">
          <div className="icon">
            <img src="img/contact/phone.png" alt="icon" />
          </div>
          <div className="content">
            <h3>Phone</h3>
            <ul>
              <li>
                <a href="Tel: +1 650 254 6342">+1 650 254 6342</a>
              </li>
            </ul>
          </div>{" "}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
        <div className="list_inner">
          <div className="icon">
            <img src="img/contact/email.png" alt="icon" />
          </div>
          <div className="content">
            <h3>Email</h3>
            <ul>
              <li>
                <a href="mailto:satmorningrain@gmail.com">
                  satmorningrain@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:satmorningrain@gmail.com">
                  abe@blendtune.com
                </a>
              </li>
            </ul>
          </div>{" "}
        </div>
      </li>
    </ul>
  );
};

export default Address;
