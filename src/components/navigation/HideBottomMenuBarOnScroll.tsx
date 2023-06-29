import { useEffect } from 'react';

const HideBottomMenuBarOnScroll = () => {
  useEffect(() => {
    let previousScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (previousScrollY > currentScrollY) {
        // Scrolling up, show the menu bar
        document.documentElement.style.setProperty('--bottom-menu-bar-transform', 'translateY(0)');
      } else {
        // Scrolling down, hide the menu bar
        document.documentElement.style.setProperty('--bottom-menu-bar-transform', 'translateY(100%)');
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // Since this component doesn't render anything, return null
};

export default HideBottomMenuBarOnScroll;
