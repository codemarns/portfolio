import React, { useEffect, useState } from "react";

// get the width and height of an element when the screen loads and/or resize.
export const useElementDimensions = (ref: React.RefObject<any>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = () => ({
      width: ref?.current && ref?.current.offsetWidth,
      height: ref?.current && ref?.current.offsetHeight,
    });

    const handleDimensions = () => {
      setDimensions(getDimensions());
    };

    if (ref.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("load", handleDimensions);
    window.addEventListener("resize", handleDimensions);

    return () => {
      window.removeEventListener("load", handleDimensions);
      window.removeEventListener("resize", handleDimensions);
    };
  }, [ref]);

  return dimensions;
};

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, [progress]);

  return progress;
};
