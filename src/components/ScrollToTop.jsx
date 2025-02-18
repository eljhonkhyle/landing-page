import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when navigating to a new page
    window.scrollTo(0, 0);
  }, [pathname]);

  // Force scroll to top on full page reload
  useEffect(() => {
    window.onload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return null;
};

export default ScrollToTop;
