"use client"
import { useState, useEffect } from "react";

function usePageLoad() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === "complete") {
      handlePageLoad(); // If the page is already loaded
    } else {
      window.addEventListener("load", handlePageLoad); // Wait for the load event
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return isPageLoaded;
}

export default usePageLoad;