import React, { useState, useEffect } from "react";

const useIntersectObserver = (intersectRef, optionsObject) => {
  const { root = null, rootMargin = "0px", threshold } = optionsObject;

  const [isIntersect, setIsIntersect] = useState(false);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setIsIntersect(true);
    } else {
      setIsIntersect(false);
    }
  };
  const options = {
    root: root,
    rootMargin: rootMargin,
    threshold: threshold,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    if (intersectRef.current) observer.observe(intersectRef.current);
    return () => observer.disconnect();
  }, []);
  return {
    isIntersect,
  };
};

export default useIntersectObserver;
