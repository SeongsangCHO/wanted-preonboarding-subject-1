import React, { useState, useEffect, useCallback } from "react";

const useIntersectObserver = (intersectRef) => {
  const [isIntersect, setIsIntersect] = useState(false);

  const handleObserver = useCallback(async (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setIsIntersect(true);
    } else {
      setIsIntersect(false);
    }
  }, []);
  const options = {
    root: null,
    rootMargin: "200px",
    threshold: 0.01,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    if (intersectRef.current) observer.observe(intersectRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);
  return {
    isIntersect,
  };
};

export default useIntersectObserver;
