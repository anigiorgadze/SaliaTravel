import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollPositionManager = () => {
  const location = useLocation();
  const scrollPositions = useRef({}); // Keeps track of scroll positions

  // Save scroll position when the component unmounts or location changes
  useEffect(() => {
    const saveScrollPosition = () => {
      scrollPositions.current[location.pathname] = window.scrollY; // Save by pathname
    };

    // Save scroll position before navigation
    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      saveScrollPosition(); // Save on component unmount
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, [location]);

  // Restore scroll position when location changes
  useEffect(() => {
    const scrollY = scrollPositions.current[location.pathname] || 0; // Retrieve by pathname
    window.scrollTo(0, scrollY);
  }, [location.pathname]); // Listen specifically to pathname changes

  return null;
};

export default ScrollPositionManager;
