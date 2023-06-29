import React, { useEffect } from 'react';

const ScrollToTopOnMount = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return null; // Since this component doesn't render anything, return null
};

export default ScrollToTopOnMount;
