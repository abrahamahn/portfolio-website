import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.753230817688!2d-122.3912019!3d37.772384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fd012b640ab%3A0xcf9acdfc4fb8bbb2!2s1245%204th%20St%2C%20San%20Francisco%2C%20CA%2094158%2C%20USA!5e0!3m2!1sen!2sth!4v1667339259520!5m2!1sen!2sth" 
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;