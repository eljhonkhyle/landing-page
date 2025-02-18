import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  }, [pathname]);

  // Force scroll to top on full page refresh
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return null;
};

export default ScrollToTop;
